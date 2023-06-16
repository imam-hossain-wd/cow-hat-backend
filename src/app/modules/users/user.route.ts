import { Router } from "express";
import { userController } from "./user.controller";


const router = Router();

router.post('/singup',userController.createUser);
router.get('/',userController.getAllUsers);
router.get('/:id',userController.getSingleUser);



export default router;