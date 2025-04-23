import { Router } from "express";
import { checkSlugTopic } from "../admin.controller";

const adminTopicRouter = Router();

adminTopicRouter.get('/check-slug', checkSlugTopic);

export default adminTopicRouter

