import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Exclude()
export class AddressDto {
  city: string;
  country: string;
  county: string;
  addressLine: string;
}
