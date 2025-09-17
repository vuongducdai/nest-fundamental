import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(){
    return 'i love coffees'
  }

  @Get(':id')
  find(@Param('id') id: string){
    return `This is a id ${id}`   
  }

  @Post()
  create(@Body() body){

  }
}
