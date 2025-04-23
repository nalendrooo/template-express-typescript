import { Router } from "express";
import { checkSlugCategory, createCategory, createSubCategory, getAllCategory, getSubCategoryByCategoryId } from "../admin.controller";
import { validateRequest } from "../../../middleware/validate-request";
import { createCategorySchema, createSubCategorySchema } from "../admin.request";

const adminCategoryRouter = Router();

adminCategoryRouter.post('/', validateRequest(createCategorySchema), createCategory);
adminCategoryRouter.get('/', getAllCategory);
adminCategoryRouter.get('/check-slug', checkSlugCategory);
adminCategoryRouter.get('/:categoryId', getSubCategoryByCategoryId);
adminCategoryRouter.post('/:categoryId/sub-category', validateRequest(createSubCategorySchema), createSubCategory);

export default adminCategoryRouter

