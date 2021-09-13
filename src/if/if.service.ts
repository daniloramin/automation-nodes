import { Injectable } from '@nestjs/common';
import { IfDTO } from './dtos/if-statement.dto';

@Injectable()
export class IfService {

	execute(items: any[]) {

		type ParameterValue = string | number | boolean | undefined | null;

		const compareOperation: {
			[key: string]: (value1: ParameterValue, value2: ParameterValue) => boolean;
		} = {
			after: (value1: ParameterValue, value2: ParameterValue) => (value1 || 0) > (value2 || 0),
			before: (value1: ParameterValue, value2: ParameterValue) => (value1 || 0) < (value2 || 0),
			contains: (value1: ParameterValue, value2: ParameterValue) => (value1 || '').toString().includes((value2 || '').toString()),
			notContains: (value1: ParameterValue, value2: ParameterValue) => !(value1 || '').toString().includes((value2 || '').toString()),
			endsWith: (value1: ParameterValue, value2: ParameterValue) => (value1 as string).endsWith(value2 as string),
			equal: (value1: ParameterValue, value2: ParameterValue) => value1 === value2,
			notEqual: (value1: ParameterValue, value2: ParameterValue) => value1 !== value2,
			larger: (value1: ParameterValue, value2: ParameterValue) => (value1 || 0) > (value2 || 0),
			largerEqual: (value1: ParameterValue, value2: ParameterValue) => (value1 || 0) >= (value2 || 0),
			smaller: (value1: ParameterValue, value2: ParameterValue) => (value1 || 0) < (value2 || 0),
			smallerEqual: (value1: ParameterValue, value2: ParameterValue) => (value1 || 0) <= (value2 || 0),
			startsWith: (value1: ParameterValue, value2: ParameterValue) => (value1 as string).startsWith(value2 as string),
			isEmpty: (value1: ParameterValue) => [undefined, null, ''].includes(value1 as string),
			regex: (value1: ParameterValue, value2: ParameterValue) => {
				const regexMatch = (value2 || '').toString().match(new RegExp('^/(.*?)/([gimusy]*)$'));



				let regex: RegExp;
				if (!regexMatch) {
					regex = new RegExp((value2 || '').toString());
				} else if (regexMatch.length === 1) {
					regex = new RegExp(regexMatch[1]);
				} else {
					regex = new RegExp(regexMatch[1], regexMatch[2]);
				}

				return !!(value1 || '').toString().match(regex);
			},
		};

		let retornoTrue: Array<any> = [];
		let retornoFalse: Array<any>= [];

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
				let comparacao = compareOperation[items["operation"][itemIndex]](items[itemIndex].value1, items[itemIndex].value2);

				if(comparacao) {
					retornoTrue.push(items[0]);
				}

				if(!comparacao) {
					retornoFalse.push(items[0]);
				}
			}

			return [retornoTrue, retornoFalse];
		}

		// items[0].values.forEach((item) => {
		// 	let comparacao = compareOperation[operation](item.value1, item.value2);

		// });
}

