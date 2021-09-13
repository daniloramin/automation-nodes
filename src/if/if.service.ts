import { Injectable } from '@nestjs/common';
import { IfDTO } from './dtos/if-statement.dto';

@Injectable()
export class IfService {

	execute(body: IfDTO) {
		return body;
	}
}
