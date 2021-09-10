import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CorreiosService {

    async rastreio(codigo: string): Promise<any> {
        const rastreioBody = {
            "code": codigo, 
            "type": "LS"
        }

        const { data } = await axios.post(`https://correios.contrateumdev.com.br/api/rastreio`, rastreioBody);

        const eventos = [];

        data.objeto[0].evento.map((itemEvento) => {
            const { data, hora, descricao, unidade: { cidade, tipounidade } } = itemEvento;
            
            eventos.push({ data, hora, descricao, cidade, tipounidade });
        });

        return eventos;
    }
}
