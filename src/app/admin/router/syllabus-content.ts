import { Router } from "express";
import { checkSlugSyllabusContent } from "../admin.controller";

const adminSyllabusContentRouter = Router();

adminSyllabusContentRouter.get('/check-slug', checkSlugSyllabusContent);

export default adminSyllabusContentRouter

