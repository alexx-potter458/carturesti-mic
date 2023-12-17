import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/orders.entity';
import { OrderProduct } from './entities/order-products.entity';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { AddressesModule } from 'src/addresses/addresses.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderProduct]),
    AddressesModule,
    UsersModule,
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
  exports: [TypeOrmModule, OrdersService],
})
export class OrdersModule {}
