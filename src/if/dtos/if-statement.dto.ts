import { IsNotEmpty } from "class-validator";

export class IfDTO {
	@IsNotEmpty()
	value1: string | number | boolean;

	@IsNotEmpty()
	value2: string | number | boolean;

	@IsNotEmpty()
	operation: string;
}
