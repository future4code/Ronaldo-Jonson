export interface User {
    name: string;
    balance: number;
}

export function performPurchase(user: User, value: number): User | undefined 
{
    return (user.balance >= value)? {
        name: user.name,
        balance: user.balance - value	
    }: undefined;
}