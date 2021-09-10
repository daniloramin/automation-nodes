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

        //const rastreio = data.objeto;

        // console.log(rastreio.evento.map((e) => console.log(e)));
        // console.log(data.objeto[0])

        const eventos = [];

        data.objeto[0].evento.map((e) => {
            const { data, hora, descricao, unidade: { cidade, tipounidade } } = e
            
            eventos.push({ data, hora, descricao, cidade, tipounidade });
        });

        return eventos;
    }
}
