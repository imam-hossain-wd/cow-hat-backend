"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const order_service_1 = require("./order.service");
const createOrder = (0, catchAsync_1.default)(async (req, res) => {
    const { cow, buyer } = req.body;
    // try {
    const newOrder = await order_service_1.ordersService.createOrder(cow, buyer);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Order placed successfully.',
        data: newOrder,
    });
    // } catch (error) {
    //   sendResponse(res, {
    //     statusCode: 500,
    //     success: false,
    //     message: 'An error occurred while processing the order.',
    //   });
    // }
});
exports.ordersController = {
    createOrder,
};
