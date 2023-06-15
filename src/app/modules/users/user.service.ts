import { IUser } from "./user.interface";
import { User } from "./user.model";



const createUser = async (user: IUser): Promise<IUser | null> => {
    const createdUser = await User.create(user);
    return createdUser;
};

const getAllUsers = async ()=>{
  const allUsers = await User.find({});
  return allUsers;
}

  export const userService ={
    createUser,
    getAllUsers

  }