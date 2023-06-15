import { Request, Response } from 'express';
import { userService } from './user.service';
import { errorlogger } from '../../../shared/logger';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userService.createUser(user);
    
    res.status(200).json({
        success: true,
        statusCode:200,
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
