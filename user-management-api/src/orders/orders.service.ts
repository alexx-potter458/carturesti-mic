import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/orders.entity';
import { Repository } from 'typeorm';
import { OrderProduct } from './entities/order-products.entity';
import { CreateOrderDto } from './dtos/create-order.dto';
import { AddressesService } from 'src/addresses/addresses.service';
import { OrderStatusType } from 'src/utils/app.constants';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
    @InjectRepository(OrderProduct)
    private readonly orderProductsRepository: Repository<OrderProduct>,
    private readonly addressesService: AddressesService,
    private readonly usersService: UsersService,
  ) {}

  async createOrder(userId: number, orderDetails: CreateOrderDto) {
    const user = await this.usersService.findUserById(userId);

    // check for products and calculate price

    const address = await this.addressesService.createAddress(
      orderDetails.address,
    );

    const currentOrder = await this.ordersRepository.save({
      status: OrderStatusType.NEW,
      creationDate: new Date(),
      total: 100,
      address,
      user,
    });

    for (const product of orderDetails.products) {
      await this.orderProductsRepository.save({
        ...product,
        order: currentOrder,
      });
    }
  }

  async getAllOrders(userId): Promise<Order[]> {
    const user = await this.usersService.findUserById(userId);
    if (user.isAdmin) return await this.ordersRepository.find();
  }

  async getMyOrders(userId): Promise<Order[]> {
    const user = await this.usersService.findUserById(userId);

    return await this.ordersRepository.find({
      where: { user: { id: user.id } },
    });
  }

  async prepareOrder(
    userId: number,
    orderId: number,
    newStatus: OrderStatusType,
  ) {
    const user = await this.usersService.findUserById(userId);

    if (!(user.isAdmin || newStatus === OrderStatusType.CANCELLED)) return;

    const order = await this.ordersRepository.findOneBy({ id: orderId });

    // in case of cancelled: restore stock

    await this.ordersRepository.save({ ...order, status: newStatus });
  }
}
