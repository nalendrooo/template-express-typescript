import { Router } from "express";
import { checkSlugMaterialContent } from "../admin.controller";

const adminMaterialContentRouter = Router();

adminMaterialContentRouter.get('/check-slug', checkSlugMaterialContent);

export default adminMaterialContentRouter

