import { Body, Controller, Param, Get, Res } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { Response } from 'express';


@Controller('correios')
export class CorreiosController {
    constructor(private correiosService: CorreiosService){}

    @Get(":codigo")
    async rastreio(@Param("codigo") codigo: string, @Res() res: Response) {
        
        try {
            const eventos = await this.correiosService.rastreio(codigo);
            res.status(200).json({ success: true, data: eventos });

        } catch (error) {
         res.status(400).json({ success: false, message: error.message });
         
        }

    }
}
