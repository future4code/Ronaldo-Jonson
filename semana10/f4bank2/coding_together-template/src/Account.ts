import { Transaction } from './Transaction';

export class Account {
    private user: string;
    private cpf: number;
    private age: number;
    private balance: number = 0;
    private extract: Array<Transaction> = [];

    constructor( _cpf: number, _age: number, _user: string){
        this.user = _user;
        this.cpf = _cpf;
        this.age = _age;
    }

    public CheckUser(name: string, _cpf:number):boolean{
        return (name == this.user && _cpf == this.cpf);
    }

    public GetBalance():number{
        return this.balance;
    }
}