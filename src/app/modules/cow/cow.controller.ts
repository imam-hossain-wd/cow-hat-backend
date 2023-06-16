import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { cowService } from "./cow.service";
import sendResponse from "../../../shared/sendResponse";
import { ICow } from "./cow.interface";
import httpStatus from "http-status";




const createCow = catchAsync(async (req:Request, res:Response)=>{
    const cowData = req.body;
    const createdCow = await cowService.createCow(cowData);
    sendResponse<ICow>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'cow created successfully!',
        data: createdCow,
      });
})

const getAllCows = catchAsync(async(req:Request, res:Response)=>{
    const result = await cowService.getAllCows();

    sendResponse<ICow[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'get all cows successfully!',
        data: result,
      });
})

const getCowById = catchAsync(async(req:Request, res:Response)=>{
    const id = req.params.id;
    console.log(req.params.id);
    const result = await cowService.getCowById(id);
    sendResponse<ICow>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'get all cows successfully!',
        data: result,
      });
})

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
    deleteCow
}