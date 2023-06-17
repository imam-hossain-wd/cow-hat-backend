import { Schema, model } from "mongoose";
import IOrder from "./order.interface";


const orderSchema = new Schema<IOrder>(
    {
      cow: {
        type: Schema.Types.ObjectId,
        ref: 'Cow',
        required: true,
      },
      buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const Order = model<IOrder>('Order', orderSchema);
  
  export default Order;