

export enum Role {
    Seller = 'seller',
    Buyer = 'buyer',
  }
  
export type IUser = {
    _id: string;
    phoneNumber: string;
    role: Role;
    password: string;
    name: string;
    firstName: string;
    lastName: string;
    address: string;
    budget: number;
    income: number;
    createdAt: Date;
    updatedAt: Date;
  }