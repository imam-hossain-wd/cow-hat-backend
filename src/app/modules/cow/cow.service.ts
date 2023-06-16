
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

export const cowService = {
  createCow,
  getAllCows
};