import { Food } from './food.entity';
import { EntityRepository, Repository } from 'typeorm';
import { FoodDto } from './interfaces/food.dto';

@EntityRepository(Food)
export class FoodRepository extends Repository<Food> {
    createFood = async (foodDto: FoodDto) => {
        return await this.save(foodDto);
    };

    findOneFood = async (id: string) => {
        return this.findOneOrFail(id);
    };

    updateFood = async (id: string, foodDto: FoodDto) => {
        return this.save({ ...foodDto, id: Number(id)})
    };

    removeFood = async (id: string) => {
        await this.findOneOrFail(id);
        return this.delete(id);
    }
}

