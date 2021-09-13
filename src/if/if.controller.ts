import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { IfDTO } from './dtos/if-statement.dto';
import { IfService } from './if.service';
import { ValidationPipe } from '@nestjs/common';

@Controller('if')
export class IfController {
	constructor(private readonly ifService: IfService){}

	@Post()
	@UsePipes(ValidationPipe)
	testIf(@Body() body: IfDTO) {

		return this.ifService.execute(body);
	}
}
