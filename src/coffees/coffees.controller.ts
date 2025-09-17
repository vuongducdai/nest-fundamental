import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

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

  @Post()
  create(@Body() body){
    return this.coffeesService.create(body);
  }
}
