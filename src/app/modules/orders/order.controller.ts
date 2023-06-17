import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse'
import { ordersService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
    const { cow, buyer } = req.body;
  
    // try {
      const newOrder = await ordersService.createOrder(cow, buyer);
  
      sendResponse(res, {
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
export const ordersController = {
  createOrder,
};
