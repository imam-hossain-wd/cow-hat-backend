"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const cow_model_1 = __importDefault(require("../cow/cow.model"));
const user_model_1 = require("../users/user.model");
const order_model_1 = __importDefault(require("./order.model"));
const cow_interface_1 = require("../cow/cow.interface");
//: Promise<IOrder>
const createOrder = async (cowId, buyerId) => {
    const cow = await cow_model_1.default.findById(cowId);
    const buyer = await user_model_1.User.findById(buyerId);
    if (!cow) {
        throw new Error('Cow not found');
    }
    if (!buyer) {
        throw new Error('Buyer not found');
    }
    if (buyer.budget < cow.price) {
        throw new Error("Can't Buy! Insufficient budget");
    }
    const session = await order_model_1.default.startSession();
    session.startTransaction();
    try {
        cow.label = cow_interface_1.Label.SoldOut;
        await cow.save();
        buyer.budget -= cow.price;
        await buyer.save();
        const seller = await user_model_1.User.findById(cow.seller);
        if (seller) {
            seller.income += cow.price;
            await seller.save();
        }
        const order = await order_model_1.default.create({ cow: cowId, buyer: buyerId });
        await session.commitTransaction();
        session.endSession();
        return order;
    }
    catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
};
const getOrders = async () => {
    const orders = await order_model_1.default.find({});
    return orders;
};
exports.orderService = {
    createOrder,
    getOrders
};
