import { Controller, Get, Param, Res } from '@nestjs/common';
import { ViaCepService } from './viacep.service';
import { Response } from 'express';

@Controller('viacep')
export class ViaCepController {
  constructor(private viacepService: ViaCepService) {}

  @Get(':cep')
  async buscaCep(@Param('cep') cep:string, @Res() res: Response) {
    const address = await this.viacepService.buscaCEP(cep);
    
    res.status(200).json(address.data)
  }
}