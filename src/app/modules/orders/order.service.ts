import { Types } from 'mongoose';
import IOrder from './order.interface';
import Order from './order.model';
import Cow from '../cow/cow.model';


const createOrder = async (
  cow: Types.ObjectId,
  buyer: Types.ObjectId
): Promise<IOrder> => {
  const availableCow = await Cow.findOne({ _id: cow, label: 'for sale' });

  if (!availableCow) {
    throw new Error('The requested cow is not available for sale.');
  }


//   const session = await Order.startSession();
//   session.startTransaction();

//   try {
    await Cow.findByIdAndUpdate(cow, { label: 'sold out' });
    const newOrder = await Order.create({ cow, buyer });
    // await session.commitTransaction();

    return newOrder;
//   } catch (error) {
//     await session.abortTransaction();
//     throw error;
//   } finally {
//     session.endSession();
//   }
};

export const ordersService = {
  createOrder,
};
