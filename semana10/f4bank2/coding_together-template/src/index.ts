import { Account } from './Account'
import { JSONFileManager } from './JSONFileManager'

let accounts: Array<Account>;

const method: string = process.argv[2]

if(method == 'create'){
    CreateAccount(process.argv[3], +process.argv[4], +process.argv[5]);
}

if(method == 'balance'){
    console.log(GetAccountBalance(process.argv[3], +process.argv[4]));
}

function CreateAccount(name: string, cpf: number, age: number) { 
    if(age >= 18){
        accounts.push(new Account(cpf, age, name))
        console.log('account created');
    }
}

function GetAccountBalance(name: string, cpf:number)
{
    for(let i = 0; i < accounts.length; i++){
        if(accounts[i].CheckUser(name, cpf)){
            return accounts[i].GetBalance();
        }
    }
}
