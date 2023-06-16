import { Request, Response, RequestHandler } from 'express';
import { userService } from './user.service';
import { IUser } from './user.interface';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.body;
    const result = await userService.createUser(user);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getAllUsers();

  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get all users successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await userService.getSingleUser(id);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get all users successfully',
    data: result,
  });
});

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
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await userService.deleteUser(id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully !',
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  // updateUser,
  deleteUser,
};
