import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { cowService } from './cow.service';
import sendResponse from '../../../shared/sendResponse';
import { ICow} from './cow.interface';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/paginations';



const createCow = catchAsync(async (req: Request, res: Response) => {
  const cowData = req.body;
  const createdCow = await cowService.createCow(cowData);
  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cow created successfully!',
    data: createdCow,
  });
});



const getAllCows = async (req: Request, res: Response) => {
  const { page, limit, sortBy, sortOrder, minPrice, maxPrice, location, searchTerm } = req.query;

  const paginationOptions: paginationFields = {
    page: page ? parseInt(page as string, 10) : 1,
    limit: limit ? parseInt(limit as string, 10) : 10,
    sortBy: sortBy as string,
    sortOrder: sortOrder === 'asc' || sortOrder === 'desc' ? sortOrder : undefined,
  };

  const filters = {
    minPrice: minPrice ? parseInt(minPrice as string, 10) : undefined,
    maxPrice: maxPrice ? parseInt(maxPrice as string, 10) : undefined,
    location: location as string,
    searchTerm: searchTerm as string,
  };

  const result = await cowService.getAllCows(paginationOptions, filters);

  sendResponse<ICow[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all cows successfully!',
    meta: result.meta,
    data: result.data,
  });
};




const getCowById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(req.params.id);
  const result = await cowService.getCowById(id);
  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get all cows successfully!',
    data: result,
  });
});

const deleteCow = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await cowService.deleteCow(id);

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cow deleted successfully !',
    data: result,
  });
});

export const cowController = {
  createCow,
  getAllCows,
  getCowById,
  deleteCow,
};
