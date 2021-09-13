import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CorreiosService {

    async rastreio(codigo: string): Promise<any> {
			const rastrearPedido = "https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=LB243550059HK";
        const rastreioBody = {
            "code": codigo,
            "type": "LS"
        }

        const { data } = await axios.post(`https://correios.contrateumdev.com.br/api/rastreio`, rastreioBody);

        const eventos = [];

        data.objeto[0].evento.map((eventoItem) => {
            const { data, hora, descricao, unidade: { cidade, tipounidade } } = eventoItem;

            eventos.push({ data, hora, descricao, cidade, tipounidade });
        });

        return eventos;
    }
}
