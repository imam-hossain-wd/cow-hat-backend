import { Router } from "express";
import { userController } from "./user.controller";


const router = Router();

router.post('/create-user',userController.createUser);
router.get('/',userController.getAllUsers);



export default router;