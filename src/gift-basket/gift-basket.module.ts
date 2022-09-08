import { Module } from '@nestjs/common';
import { GiftBasketController } from './gift-basket.controller';
import { GiftBasketService } from './gift-basket.service';

@Module({controllers: [GiftBasketController], providers: [GiftBasketService]})
export class GiftBasketModule {}
