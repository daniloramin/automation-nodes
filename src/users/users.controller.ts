import { Controller, Get, Post, Param, Request, HttpCode, Req, Response, Body, Header, Redirect, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.repository';

const teste = {
  "url": "https://www.google.com", 
  "statusCode": 301
}

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post('testepost')
  create(@Request() request: Request): string {

    let resposta = this.usersService.if(request.body)
    
    return resposta
  }

  
  @HttpCode(203)
  @Get(':cat')
  /*findOne(@Param() params): string {
        console.log(params.testeget);
        return `This action returns a #${params.testeget} cat`;
    }*/ 
  findOne(@Param('cat') id: 'string', @Query('age') age:string) {
    
    
  }
  index(): string {
    return 'Admin page';
  }
  
  
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  createUser(@Body() user: Users): Users[] {
    return this.usersService.createUser(user);
  }

  /*@Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }*/

  @Post('seeder')
  seeder() {
    this.usersService.usersSeeder();
    return 'Sent!'
  }

  @Get()
  buscaCep() {
    console.log("Chegou!")
  }
}