// import httpStatus from 'http-status';
// import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user);
  return createdUser;
};

const getAllUsers = async () => {
  const allUsers = await User.find({});
  if(allUsers.length === 0){
    throw new ApiError(httpStatus.NOT_FOUND, "There is no user found")
}
  return allUsers;
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
