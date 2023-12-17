import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { getUserIdFromRequest } from '../utils/app.functions';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Req() request: Request, @Body() orderDto: CreateOrderDto) {
    await this.ordersService.createOrder(
      getUserIdFromRequest(request),
      orderDto,
    );
  }
}
