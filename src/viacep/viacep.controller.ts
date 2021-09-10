import { Controller, Get, Post, Request, Param, Res, HttpStatus } from '@nestjs/common';
import { ViaCepService } from './viacep.service';
import axios from 'axios';
import { Response } from 'express';

@Controller('viacep')
export class ViaCepController {
  constructor(private viacepService: ViaCepService) {
  }
  
//   @Post()
//   createUser(@Body() user: Users): Users[] {
//     return this.usersService.createUser(user);
//   }

  @Get(':cep')
  async buscaCep(@Param('cep') cep:string, @Res() res: Response) {
    const address = await this.viacepService.buscaCEP(cep);
    
    res.status(200).json(address.data)
  }
}