import { IsString, IsNumber } from 'class-validator';

export class CreateBasketDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly price: number;

  @IsString({ each: true })
  readonly items: string[];
}
