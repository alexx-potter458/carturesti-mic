import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Injectable } from '@nestjs/common';
import { AddressDto } from './dtos/address.dto';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private readonly addressesRepository: Repository<Address>,
  ) {}

  async createAddress(addressDto: AddressDto): Promise<Address> {
    return await this.addressesRepository.save(addressDto);
  }

  async getAddressById(id: number): Promise<Address> {
    return await this.addressesRepository.findOneBy({ id });
  }
}
