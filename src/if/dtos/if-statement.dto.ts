import { IsNotEmpty } from "class-validator";

export class IfDTO {
	@IsNotEmpty()
	condition: string;

	@IsNotEmpty()
	operation: [];

	@IsNotEmpty()
	items: [];

}
