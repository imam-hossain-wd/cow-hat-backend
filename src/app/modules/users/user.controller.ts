import { Request, Response } from 'express';
import { userService } from './user.service';
import { errorlogger } from '../../../shared/logger';
import { IUser } from './user.interface';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';



const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userService.createUser(user);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  } catch (error) {
    errorlogger.error(error);
  }
};



export const userController = {
  createUser,
};
