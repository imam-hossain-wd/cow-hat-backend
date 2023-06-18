"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
router.post('/singup', user_controller_1.userController.createUser);
router.get('/:id', user_controller_1.userController.getSingleUser);
router.delete('/:id', user_controller_1.userController.deleteUser);
router.get('/', user_controller_1.userController.getAllUsers);
router.patch('/:id', user_controller_1.userController.updateUser);
exports.default = router;
