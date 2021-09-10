import { Injectable, Res } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { json } from 'stream/consumers';
import axios from 'axios';
import { Response } from 'express';

@Injectable()
export class ViaCepService {
    constructor(private axios: HttpService){}

  async buscaCEP(cep:string): Promise<any> {

    const address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  
    return address;
  }
}