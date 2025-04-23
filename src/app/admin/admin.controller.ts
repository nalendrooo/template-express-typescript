import { type NextFunction, type Request, type Response } from 'express'
import { AppError } from '../../middleware/error-handler'
import { ResponseHandler } from "../../utils/response-handler"
import * as categoryService from '../category/category.service'
import * as courseService from '../course/course.service'
import * as materialContentLearningService from '../material-content-learning/material-content-learning.service'
import * as materialContentService from '../material-content/material-content.service'
import * as subCategoryService from '../sub-category/sub-category.service'
import * as syllabusContentService from '../syllabus-content/syllabus-content.service'
import * as syllabusService from '../syllabus/syllabus.service'
import * as topicService from '../topic/topic.service'

export const createCourse = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { body } = req
    const data = await courseService.createCourse({
        body
    })
    if (data instanceof AppError) {
        next(data)
        return
    }
    ResponseHandler.created(res, data, `Course ${data?.title} berhasil dibuat`)
}

export const checkSlugCourse = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { query } = req
    const data = await courseService.checkSlugCourse({
        query
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Slug ${query.slug} bisa digunakan`)
}
export const checkSlugCategory = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { query } = req
    const data = await categoryService.checkSlugCategory({
        query
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Slug ${query.slug} bisa digunakan`)
}

export const checkSlugSubCategory = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { query } = req
    const data = await subCategoryService.checkSlugSubCategory({
        query
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Slug ${query.slug} bisa digunakan`)
}
export const checkSlugTopic = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { query } = req
    const data = await topicService.checkSlugTopic({
        query
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Slug ${query.slug} bisa digunakan`)
}

export const checkSlugSyllabusContent = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { query } = req
    const data = await syllabusContentService.checkSlugSyllabusContent({
        query
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Slug ${query.slug} bisa digunakan`)
}

export const checkSlugMaterialContent = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { query } = req
    const data = await materialContentService.checkSlugMaterialContent({
        query
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Slug ${query.slug} bisa digunakan`)
}

export const createCategory = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { body } = req

    const data = await categoryService.createCategory({
        body
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.created(res, data, `Category berhasil dibuat`)
}

export const getAllCategory = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { query } = req
    const data = await categoryService.getAllCategory({
        query
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Data berhasil di ambil`)
}

export const getSubCategoryByCategoryId = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { query, params: { categoryId } } = req
    const data = await subCategoryService.getSubCategoryByCategoryId({
        query,
        categoryId: Number(categoryId)
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Data berhasil di ambil`)
}

export const getAllCourse = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { query } = req
    const data = await courseService.getAllCourse({
        query
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Data berhasil di ambil`)
}

export const getSyllabusByCourseId = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { params: { courseId } } = req
    const data = await syllabusService.getSyllabusByCourseId({
        courseId: Number(courseId)
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Data berhasil di ambil`)
}

export const getTopicBySubCategoryId = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { query, params: { subCategoryId } } = req
    const data = await topicService.getTopicBySubCategoryId({
        query,
        subCategoryId: Number(subCategoryId)
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Data berhasil di ambil`)
}

export const createSyllabusContentMaterial = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { body, params: { courseId } } = req

    const data = await syllabusContentService.createSyllabusContentMaterial({
        courseId: Number(courseId),
        body
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.created(res, data, `Materi berhasil dibuat`)
}

export const createSubCategory = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { body, params: { categoryId } } = req

    const data = await subCategoryService.createSubCategory({
        categoryId: Number(categoryId),
        body
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.created(res, data, `Sub category berhasil dibuat`)
}

export const createTopic = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { body, params: { subCategoryId } } = req

    const data = await topicService.createTopic({
        subCategoryId: Number(subCategoryId),
        body
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.created(res, data, `Topic berhasil dibuat`)
}

export const createSyllabusContentExam = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { body, params: { courseId } } = req

    const data = await syllabusContentService.createSyllabusContentExam({
        courseId: Number(courseId),
        body
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.created(res, data, `Exam berhasil dibuat`)
}
export const getMaterialContentById = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { params: { materialContentId, courseId } } = req

    const data = await materialContentService.getMaterialContentById({
        materialContentId: Number(materialContentId),
        courseId: Number(courseId)

    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Materi berhasil diambil`)
}

// export interface AuthRequest extends Request {
//     user?: { id: number; name: string; role: string };
// }
export const createMaterialContentLearning = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { body, params: { courseId, syllabusContentId } } = req

    const data = await materialContentLearningService.createMaterialContentLearning({
        courseId: Number(courseId),
        body,
        syllabusContentId: Number(syllabusContentId)
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.created(res, data, `Material Content Learning berhasil dibuat`)
}