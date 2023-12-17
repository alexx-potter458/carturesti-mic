import { Exclude, Expose } from 'class-transformer';
import { AddressDto } from 'src/addresses/dtos/address.dto';
import { OrderProductDto } from './order-product.dto';

@Exclude()
export class CreateOrderDto {
  @Expose()
  products: OrderProductDto[];

  @Expose()
  address: AddressDto;
}
