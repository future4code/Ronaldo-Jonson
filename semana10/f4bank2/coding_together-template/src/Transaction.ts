export class Transaction {
    private value: number;
    private date: Date;
    private description: string;

    constructor( _description: string, _date: Date, _value: number){
        this.value = _value;
        this.date =  _date;
        this.description = _description;
    }

    public Get(): Transaction {
        return this;
    }
}