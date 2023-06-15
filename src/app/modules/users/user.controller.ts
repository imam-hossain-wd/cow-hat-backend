import { Request, Response, NextFunction } from 'express';
import { userService } from './user.service';
import { IUser } from './user.interface';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';




const createUser = async (req: Request, res: Response,next:NextFunction) => {
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
    next(error)
  }
};

const getAllUsers = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const result = await userService.getAllUsers();

    sendResponse<IUser[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "get all users successfully",
      data: result,
    });
    
  } catch (error) {
    next(error)
  }
};


export const userController = {
  createUser,
  getAllUsers
};
