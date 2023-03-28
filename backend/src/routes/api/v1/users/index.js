import { Router } from "express";
import { getAllUsers, createOneUser, getOneUser } from "./handlers";

const router = Router();

router.get(`/`, getAllUsers);
router.post(`/`, createOneUser);
router.get(`/:id`, getOneUser);


export default router;
