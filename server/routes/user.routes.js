import { Router } from "express";
import { ping,
         test,
         createUser }  from "../controllers/users.controller.js"

const router = Router();


router.get("/ping", ping);

router.post("/post", createUser);

router.get("/test", test);


export default router;