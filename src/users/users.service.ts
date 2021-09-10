import { Injectable } from '@nestjs/common';
import { Request } from 'supertest';
import {
	NodeParameterValue,
} from './testeIf';
import {UsersRepository, Users} from './users.repository';

@Injectable()
export class UsersService {
    userRepository = new UsersRepository();


  if(x): string {
    
    const compareOperationFunctions: {
        [key: string]: (value1: NodeParameterValue, value2: NodeParameterValue) => boolean;
    } = {
        after: (value1: NodeParameterValue, value2: NodeParameterValue) => (value1 || 0) > (value2 || 0),
        before: (value1: NodeParameterValue, value2: NodeParameterValue) => (value1 || 0) < (value2 || 0),
        contains: (value1: NodeParameterValue, value2: NodeParameterValue) => (value1 || '').toString().includes((value2 || '').toString()),
        notContains: (value1: NodeParameterValue, value2: NodeParameterValue) => !(value1 || '').toString().includes((value2 || '').toString()),
        endsWith: (value1: NodeParameterValue, value2: NodeParameterValue) => (value1 as string).endsWith(value2 as string),
        equal: (value1: NodeParameterValue, value2: NodeParameterValue) => value1 === value2,
        notEqual: (value1: NodeParameterValue, value2: NodeParameterValue) => value1 !== value2,
        larger: (value1: NodeParameterValue, value2: NodeParameterValue) => (value1 || 0) > (value2 || 0),
        largerEqual: (value1: NodeParameterValue, value2: NodeParameterValue) => (value1 || 0) >= (value2 || 0),
        smaller: (value1: NodeParameterValue, value2: NodeParameterValue) => (value1 || 0) < (value2 || 0),
        smallerEqual: (value1: NodeParameterValue, value2: NodeParameterValue) => (value1 || 0) <= (value2 || 0),
        startsWith: (value1: NodeParameterValue, value2: NodeParameterValue) => (value1 as string).startsWith(value2 as string),
        isEmpty: (value1: NodeParameterValue) => [undefined, null, ''].includes(value1 as string),
        regex: (value1: NodeParameterValue, value2: NodeParameterValue) => {
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

    let operation: string = 'smallerEqual'
    let valorComparativo = 28

    let verdadeiro = []
    let falso = []

    x.forEach(function (valor) {
        let retorno = compareOperationFunctions[operation as string](valor['price'], valorComparativo);

        if (retorno == true) {
            verdadeiro.push(valor)
        } else {
            falso.push(valor)
        }
    })

    console.log(verdadeiro)
    console.log(falso)

    let v: string = JSON.stringify(verdadeiro)
    let f: string = JSON.stringify(falso)

    return `${[v, f]}`
  }

  getAllUsers() {
    return this.userRepository.getUsers();
  }

  createUser(user: Users) {
    this.userRepository.createUser(user);
    return this.userRepository.getUsers();
  }

  usersSeeder() {
    this.userRepository.dataSeeder();
  }
}