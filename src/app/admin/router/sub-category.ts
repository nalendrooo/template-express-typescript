import { Router } from "express";
import { checkSlugSubCategory, createTopic, getTopicBySubCategoryId } from "../admin.controller";
import { validateRequest } from "../../../middleware/validate-request";
import { createTopicSchema } from "../admin.request";

const adminSubCategoryRouter = Router();

adminSubCategoryRouter.get('/check-slug', checkSlugSubCategory);
adminSubCategoryRouter.get('/:subCategoryId', getTopicBySubCategoryId);
adminSubCategoryRouter.post('/:subCategoryId/topic', validateRequest(createTopicSchema), createTopic);

export default adminSubCategoryRouter

