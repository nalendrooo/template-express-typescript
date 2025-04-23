import { Router } from "express";
import adminCourseRouter from "./router/course";
import adminMaterialContentRouter from "./router/material-content"
import adminSyllabusContentRouter from "./router/syllabus-content"
import adminCategoryRouter from "./router/category";
import adminSubCategoryRouter from "./router/sub-category";
import adminTopicRouter from "./router/topic";

const route = Router()

route.use('/course', adminCourseRouter)
route.use('/syllabus-content', adminSyllabusContentRouter)
route.use('/material-content', adminMaterialContentRouter)
route.use('/category', adminCategoryRouter)
route.use('/sub-category', adminSubCategoryRouter)
route.use('/topic', adminTopicRouter)

export default route    