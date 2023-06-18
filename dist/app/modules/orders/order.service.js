"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersService = void 0;
const order_model_1 = __importDefault(require("./order.model"));
const cow_model_1 = __importDefault(require("../cow/cow.model"));
const createOrder = async (cow, buyer) => {
    const availableCow = await cow_model_1.default.findOne({ _id: cow, label: 'for sale' });
    if (!availableCow) {
        throw new Error('The requested cow is not available for sale.');
    }
    //   const session = await Order.startSession();
    //   session.startTransaction();
    //   try {
    await cow_model_1.default.findByIdAndUpdate(cow, { label: 'sold out' });
    const newOrder = await order_model_1.default.create({ cow, buyer });
    // await session.commitTransaction();
    return newOrder;
    //   } catch (error) {
    //     await session.abortTransaction();
    //     throw error;
    //   } finally {
    //     session.endSession();
    //   }
};
exports.ordersService = {
    createOrder,
};
