import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(){
    return this.coffeesService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string){
    return this.coffeesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto){
    return this.coffeesService.create(createCoffeeDto);
  }
}
