type account = {
    user: string;
    age: number;
    id: number;
    balance: number;
}

type transaction = {
    receiverId: number;
    senderId: number;
    amount: number;
}

let Accounts: account[];

function createAccount(_name: string, _age: number,_id: number) {

    if(_age < 18)
        console.log("Error user is too young");
    else{     
        let newAccount: account = {
            user: _name,
            age: _age,
            id: Accounts.length,
            balance: 0,
        }

        Accounts.push(newAccount);
    }
}

function GetAccountBalance(userID: number){
    return Accounts[userID];
}

function AddValue(userID:number, amount:number){
    Accounts[userID].balance += amount;
}

function Transfer(_transaction: transaction){
    Accounts[_transaction.senderId].balance -= _transaction.amount;
    Accounts[_transaction.receiverId].balance += _transaction.amount;
}

function GetAllAccounts(){
    for(let i = 0; i < Accounts.length; i++){
        console.log(Accounts[i]);
    }
}