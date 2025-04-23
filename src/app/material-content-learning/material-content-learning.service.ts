import { ERROR_CODE } from "../../interface"
import { AppError } from "../../middleware/error-handler"
import { IBodyCreateMaterialContentModel } from "../syllabus-content/syllabus.model"
import * as materialContentLearningRepository from "./material-content-learning.repository"
import * as materialContentRepository from "../material-content/material-content.repository"
import * as courseRepository from "../course/course.repository"

export const createMaterialContentLearning = async ({
    body,
    courseId,
    syllabusContentId
}: {
    syllabusContentId: number
    courseId: number
    body: IBodyCreateMaterialContentModel
}) => {
    const course = await courseRepository.getCourseById({ courseId })

    if (!course) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Course tidak ditemukan')
    }

    const checkSlugMaterialContent = await materialContentRepository.getMaterialContentBySlug({
        slug: body.slug
    })

    if (checkSlugMaterialContent) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, `Slug ${body.slug} sudah digunakan`)
    }

    const materialContent = await materialContentRepository.getLastOrderMaterialContent({
        syllabusContentId
    })

    if (!materialContent) {
        return await materialContentRepository.createMaterialContent({
            order: 1,
            data: body,
            syllabusContentId
        })
    }

    await materialContentRepository.createMaterialContent({
        order: materialContent.order + 1,
        data: body,
        syllabusContentId
    })


    return await materialContentLearningRepository.createMaterialContentLearning({
        data: {
            content: body.content
        },
        materialContentId: materialContent.id
    })
}