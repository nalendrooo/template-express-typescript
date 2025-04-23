import { SyllabusContentType } from "@prisma/client";
import { ERROR_CODE, IQueryParams } from "../../interface";
import { AppError } from "../../middleware/error-handler";
import { slugRegex } from "../../utils/regex";
import * as syllabusContentRepository from "./syllabus-content.repository";
import { IBodyCreateSyllabusContentLearningModel } from "./syllabus.model";
import * as courseRepository from "../course/course.repository";

export const checkSlugSyllabusContent = async ({
    query
}: {
    query: IQueryParams
}) => {
    const { slug } = query

    if (!slug) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Slug tidak boleh kosong')
    }

    if (!slugRegex.test(String(slug))) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Slug hanya boleh berisi huruf, angka, dan strip (-)');
    }

    const checkSlug = await syllabusContentRepository.getSyllabusContentBySlug({
        slug: String(slug)
    })

    if (checkSlug) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, `Slug ${slug} sudah digunakan`)
    }

    return
}

export const createSyllabusContentMaterial = async ({
    body,
    courseId
}: {
    courseId: number,
    body: IBodyCreateSyllabusContentLearningModel
}) => {

    if (body.type !== SyllabusContentType.MATERIAL) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Selain tipe material tidak boleh di tambahkan')
    }

    const course = await courseRepository.getCourseById({ courseId })

    if (!course) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Course tidak ditemukan')
    }

    const checkSlugSyllabusContent = await syllabusContentRepository.getSyllabusContentBySlug({
        slug: body.slug
    })

    if (checkSlugSyllabusContent) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, `Slug ${body.slug} sudah digunakan`)
    }

    const syllabusContent = await syllabusContentRepository.getLastOrderSyllabusContent({
        syllabusId: course.Syllabus[0].id
    })

    if (!syllabusContent) {
        return await syllabusContentRepository.createSyllabusContent({
            order: 1,
            data: body,
            syllabusId: course.Syllabus[0].id
        })
    }

    return await syllabusContentRepository.createSyllabusContent({
        order: syllabusContent.order + 1,
        data: body,
        syllabusId: course.Syllabus[0].id
    })

}

export const createSyllabusContentExam = async ({
    body,
    courseId
}: {
    courseId: number,
    body: IBodyCreateSyllabusContentLearningModel
}) => {

    if (body.type !== SyllabusContentType.EXAM) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Selain tipe exam tidak boleh di tambahkan')
    }

    const course = await courseRepository.getCourseById({ courseId })

    if (!course) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Course tidak ditemukan')
    }

    const checkSlugSyllabusContent = await syllabusContentRepository.getSyllabusContentBySlug({
        slug: body.slug
    })

    if (checkSlugSyllabusContent) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, `Slug ${body.slug} sudah digunakan`)
    }

    const syllabusContent = await syllabusContentRepository.getLastOrderSyllabusContent({
        syllabusId: course.Syllabus[0].id
    })

    if (!syllabusContent) {
        return await syllabusContentRepository.createSyllabusContent({
            order: 1,
            data: body,
            syllabusId: course.Syllabus[0].id
        })
    }

    return await syllabusContentRepository.createSyllabusContent({
        order: syllabusContent.order + 1,
        data: body,
        syllabusId: course.Syllabus[0].id
    })

}