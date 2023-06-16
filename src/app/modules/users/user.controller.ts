import { Request, Response, NextFunction } from 'express';
import { userService } from './user.service';
import { IUser } from './user.interface';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { errorlogger } from '../../../shared/logger';



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

const getSingleUser = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const id = req.params.id 
    const result = await userService.getSingleUser(id);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "get all users successfully",
      data: result,
    });
    
  } catch (error) {
    next(error)
  }
};

// const updateUser = async (req: Request, res: Response, next:NextFunction) => {
//   try {
//     const id = req.params.id;
//     const updatedData = req.body;
//     const result = await userService.updateUser(id, updatedData);

//     sendResponse<IUser>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "get all users successfully",
//       data: result,
//     });

//   } catch (error) {
//     next(error)
//   }
// };
const deleteUser = (async (req: Request, res: Response, next:NextFunction) => {
  try{
    const id = req.params.id;

  const result = await userService.deleteUser(id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully !',
    data: result,
  });

  }
  catch(error){
    next(error)
    errorlogger.error(error)
  }
});


export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  // updateUser,
  deleteUser
};
