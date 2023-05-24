import express from "express"
import {
    createUserSchema,
    deleteUserSchema,
    updateUserSchema,
    getUserSchema,
    listUsersSchema,
} from "../schema/user"

import {
    createUserHandler,
    deleteUserHandler,
    getUserHandler,
    listUsersHandler,
    updateUserHandler,
} from "../controllers/user.controller"
import validateResource from "../middleware/validateResource"

const router = express.Router()

router.get("/:userId", getUserHandler)

router.get("/", validateResource(listUsersSchema), listUsersHandler)

router.post("/", validateResource(createUserSchema), createUserHandler)

router.put("/:userId", validateResource(updateUserSchema), updateUserHandler)

router.delete("/:userId", validateResource(deleteUserSchema), deleteUserHandler)

export default router
