import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { FoodDto } from './interfaces/food.dto'

import { InjectRepository } from '@nestjs/typeorm';
import { FoodRepository } from './food.repository'

@Controller('food')
// @UseGuards(AuthGuard('jwt'))
export class FoodController {
    constructor(
        @InjectRepository(FoodRepository) private readonly foodRepository: FoodRepository,
    ) {}
    
    @Post()
    create(@Body() foodDto: FoodDto) {
        return this.foodRepository.createFood(foodDto);
    }

    @Get()
    findAll() {
        return this.foodRepository.find()
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.foodRepository.findOneFood(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() foodDto: FoodDto) {
        return this.foodRepository.updateFood(id, foodDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.foodRepository.removeFood(id);
    }
}
