import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food }  from './food.entity';
import { FoodRepository } from './food.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Food, FoodRepository])],
  controllers: [FoodController]
})
export class FoodModule {}
