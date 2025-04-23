import { Router } from "express";
import { getAllMaterialContentType } from "./material-content-type.controller";

const route = Router()

route.get('/material-content-type', getAllMaterialContentType)

export default route    