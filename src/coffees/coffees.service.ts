import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    { id: 1, name: 'Espresso', brand: 'Lavazza', flavors: ['bold', 'intense'] },
    { id: 2, name: 'Cappuccino', brand: 'Illy', flavors: ['creamy', 'smooth'] },
    { id: 3, name: 'Americano', brand: 'Starbucks', flavors: ['mild', 'balanced'] },
    { id: 4, name: 'Latte', brand: 'Blue Bottle', flavors: ['sweet', 'milky'] },
    { id: 5, name: 'Mocha', brand: 'Intelligentsia', flavors: ['chocolate', 'rich'] }
  ];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: string): Coffee {
    const coffee = this.coffees.find(coffee => coffee.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto){
    const coffee = this.findOne(id);
    this.coffees = this.coffees.map(coffee => coffee.id === +id ? {...coffee, ...updateCoffeeDto} : coffee);
    return coffee;
  }

  create(createCoffeeDto: Partial<Coffee>): Coffee {
    const newCoffee: Coffee = {
      id: this.coffees.length + 1,
      flavors: [],
      ...createCoffeeDto
    } as Coffee;
    this.coffees.push(newCoffee);
    return newCoffee;
  }
}
