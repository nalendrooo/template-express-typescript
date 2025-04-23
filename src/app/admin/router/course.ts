import { Router } from "express";
import { validateRequest } from "../../../middleware/validate-request";
import { createCourseSchema, createMaterialContentLearningSchema, createSyllabusContentMaterialSchema } from "../admin.request";
import { checkSlugCourse, createCourse, createMaterialContentLearning, createSyllabusContentExam, createSyllabusContentMaterial, getAllCourse, getMaterialContentById, getSyllabusByCourseId } from "../admin.controller";

const adminCourseRouter = Router();

adminCourseRouter.get('/', getAllCourse);
adminCourseRouter.post('/', validateRequest(createCourseSchema), createCourse);

adminCourseRouter.get('/check-slug', checkSlugCourse);

adminCourseRouter.get('/:courseId/syllabus', getSyllabusByCourseId);
adminCourseRouter.get('/:courseId/syllabus/syllabus-content/material/:materialContentId', getMaterialContentById);

adminCourseRouter
    .post('/:courseId/syllabus/syllabus-content/create-material',
        validateRequest(createSyllabusContentMaterialSchema),
        createSyllabusContentMaterial);

adminCourseRouter
    .post('/:courseId/syllabus/syllabus-content/:syllabusContentId/learning',
        validateRequest(createMaterialContentLearningSchema),
        createMaterialContentLearning);

// // TODO: add repository
// adminCourseRouter
//     .post('/:courseId/syllabus/syllabus-content/create-exam',
//         // validateRequest(createSyllabusContentMaterialSchema),
//         createSyllabusContentExam);

export default adminCourseRouter
