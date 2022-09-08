import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { GiftBasketService } from './gift-basket.service';

@Controller('gift-basket')
export class GiftBasketController {
  constructor(private readonly giftBasketService: GiftBasketService) {}

  @Get('baskets')
  findAll() {
    return this.giftBasketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(typeof id);
    
    return this.giftBasketService.findOne(''+id);
  }

  @Post()
  create(@Body() createBasketDto: CreateBasketDto) {
    return this.giftBasketService.create(createBasketDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasketDto: UpdateBasketDto) {
    return this.giftBasketService.update(id, updateBasketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.giftBasketService.remove(id);
  }
}
