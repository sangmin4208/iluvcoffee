import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(){
        return "This action returns all coffees"
    }
    @Get(':id')
    findOne(@Param('id') id){
        return `This action returns ${id} coffee`
    }
    @Post()
    Create(@Body() body) {
        return body 
    }
}
