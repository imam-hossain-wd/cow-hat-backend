
import { ICow } from './cow.interface';
import Cow from './cow.model';



const createCow = async (cowData: ICow) => {
  const result = await Cow.create(cowData);
  return result;
};

const getAllCows = async ()=>{
    const cows = await Cow.find({});
    return cows
}

const getCowById = async (id:string)=>{
    const result = await Cow.findOne({ _id: id });
    return result;

}

export const cowService = {
  createCow,
  getAllCows,
  getCowById
};