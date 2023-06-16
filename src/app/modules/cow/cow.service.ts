
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ICow } from './cow.interface';
import Cow from './cow.model';



const createCow = async (cowData: ICow) => {
  const result = await Cow.create(cowData);
  return result;
};

const getAllCows = async ()=>{

    const cows = await Cow.find({});
    if(cows.length === 0){
        throw new ApiError(httpStatus.NOT_FOUND, "There is no cow found")
    }
    return cows
}

const getCowById = async (id:string)=>{

    const isexits = await Cow.findOne({_id: id})
    if(!isexits){
        throw new ApiError(httpStatus.NOT_FOUND, "user is not found")
    }
    const result = await Cow.findOne({ _id: id });
    return result;

}

const deleteCow = async (id: string): Promise<ICow | null> => {
    const result = await Cow.findByIdAndDelete(id)
    return result;
  };

export const cowService = {
  createCow,
  getAllCows,
  getCowById,
  deleteCow
};