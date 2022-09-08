import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { Basket } from './entities/basket.entity';

@Injectable()
export class GiftBasketService {
  private baskets: Basket[] = [
    {
      id: 1,
      name: 'basket 1 test',
      price: 33,
      items: ['vino', 'kinder'],
    },
  ];

  findAll() {
    return this.baskets;
  }

  findOne(id: string) {
    const basket = this.baskets.find((item) => item.id === +id);
    if(!basket) {
      throw new NotFoundException(`Basket with ${id} not found`)
    }
    return basket
  }

  create(createBaksetDto: any) {
    this.baskets.push(createBaksetDto);
    console.log(createBaksetDto instanceof CreateBasketDto);
    return createBaksetDto
  }

  update(id: string, updateBasketDto: any) {
    const existingBasket = this.findOne(id);
    if (existingBasket) {
      return this.baskets.find((item) => item.id === +id);
    }
  }

  remove(id: string) {
    const basketIndex = this.baskets.findIndex((item) => item.id === +id);
    if (basketIndex >= 0) {
      this.baskets.splice(basketIndex, 1);
    }
  }
}
