import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { getUserIdFromRequest } from '../utils/app.functions';
import { OrdersService } from './orders.service';
import { OrderStatusType } from 'src/utils/app.constants';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getAllOrders(@Req() request: Request) {
    return await this.ordersService.getAllOrders(getUserIdFromRequest(request));
  }

  @Get('/addresses')
  async getMyAddresses(@Req() request: Request) {
    return await this.ordersService.getMyAddresses(
      getUserIdFromRequest(request),
    );
  }

  @Get('/all')
  async getMyOrders(@Req() request: Request) {
    return await this.ordersService.getAllOrders(getUserIdFromRequest(request));
  }

  @Post()
  async createOrder(@Req() request: Request, @Body() orderDto: CreateOrderDto) {
    await this.ordersService.createOrder(
      getUserIdFromRequest(request),
      orderDto,
    );
  }

  @Patch('/status/:id')
  async changeOrderStatus(
    @Req() request: Request,
    @Param('id') orderId: number,
    @Body('status') newStatus: OrderStatusType,
  ) {
    await this.ordersService.prepareOrder(
      getUserIdFromRequest(request),
      orderId,
      newStatus,
    );
  }
}
