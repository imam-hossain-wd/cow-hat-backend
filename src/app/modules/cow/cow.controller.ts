import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { cowService } from "./cow.service";
import sendReponse from "../../../shared/sendResponse";
import { ICow } from "./cow.interface";
import httpStatus from "http-status";



const createCow = catchAsync(async (req:Request, res:Response)=>{
    const cowData = req.body;
    const createdCow = await cowService.createCow(cowData);
    sendReponse<ICow>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'cow created successfully!',
        data: createdCow,
      });
})

const getAllCows = catchAsync(async(req:Request, res:Response)=>{
    const result = await cowService.getAllCows();

    sendReponse<ICow[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'get all cows successfully!',
        data: result,
      });
})


export const cowController = {
    createCow,
    getAllCows
}