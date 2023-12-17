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

  async prepareOrder() {}
  async finishOrder() {}
  async cancelOrder() {}
}
