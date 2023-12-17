import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class OrderProductDto {
  @Expose()
  bookId: number;

  @Expose()
  quantity: number;
}
