import { Router } from "express";
import { cowController } from "./cow.controller";


const router = Router();

router.post('/create-cow', cowController.createCow);
router.get('/', cowController.getAllCows);
router.get('/:id', cowController.getCowById);

export default router;