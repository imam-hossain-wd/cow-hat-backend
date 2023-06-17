import {Types } from 'mongoose';

type IOrder = {
  cow: Types.ObjectId;
  buyer: Types.ObjectId;
  createdAt: Date;
}

export default IOrder;