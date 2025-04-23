import { Router } from "express";
import { checkAccessUser } from "./erklika.controller";

const route = Router()

route.get('/', checkAccessUser)

export default route    