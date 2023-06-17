// import httpStatus from 'http-status';
// import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IGenericResponse } from '../../../interfaces/common';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user);
  return createdUser;
};



const getAllUsers = async (paginationOptions:IPaginationOptions) : Promise<IGenericResponse<IUser[]>> => {
  const {page=1, limit=10} = paginationOptions;
  const skip = (page -1) * limit;
  const allUsers = await User.find().sort().skip(skip).limit(limit);

  if(allUsers.length === 0){
    throw new ApiError(httpStatus.NOT_FOUND, "There is no user found")
}

const total = await User.countDocuments();

  return {
    meta:{
      page,
      limit,
      total
    },
    data: allUsers
  }
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const isexits = await User.findOne({_id: id})
  if(!isexits){
    throw new ApiError(httpStatus.NOT_FOUND, "user is not found")
  }
  const singleUser = await User.findOne({ _id: id });
  return singleUser;
};

// const updateUser = async (id: string, updatedData: IUser) => {
//   const isExist = await User.findOne({ id });
//   console.log(isExist , updateUser);

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'user not found !');
//   }
//   const result = await User.findOneAndUpdate(id, updatedData, {
//     new: true
//   });
//   return result;

// };

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id)
  return result;
};

export const userService = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser
  // updateUser,
};
