import dotenv from 'dotenv'
import { ERROR_CODE, IQueryParams } from '../../interface'
import { AppError } from '../../middleware/error-handler'
import { slugRegex } from '../../utils/regex'
import * as courseRepository from '../course/course.repository'
import * as syllabusRepository from '../syllabus/syllabus.repository'
import * as topicRepository from '../topic/topic.repository'
import { IBodyCreateCourseModel } from './course.model'
import jwt from 'jsonwebtoken'
import { valid } from 'joi'

dotenv.config()

export const checkSlugCourse = async ({
    query
}: {
    query: IQueryParams
}) => {
    const { slug } = query

    if (!slug) {
        // return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Slug tidak boleh kosong')
        return {
            valid: false,
            message: 'Slug tidak boleh kosong'
        }
    }

    if (!slugRegex.test(String(slug))) {
        // return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Slug hanya boleh berisi huruf, angka, dan strip (-)');
        return {
            valid: false,
            message: 'Slug hanya boleh berisi huruf, angka, dan strip (-)'
        }
    }

    const checkSlug = await courseRepository.getCourseBySlug({
        slug: String(slug)
    })

    if (checkSlug) {
        // return new AppError(ERROR_CODE.BAD_REQUEST.code, `Slug ${slug} sudah digunakan`)
        return {
            valid: false,
            message: `Slug ${slug} sudah digunakan`
        }
    }

    return {
        valid: true,
        message: `Slug ${query.slug} bisa digunakan`
    }
}

export const createCourse = async ({
    body,
}: {
    body: IBodyCreateCourseModel
}) => {

    if (!slugRegex.test(String(body.slug))) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Slug hanya boleh berisi huruf, angka, dan strip (-)');
    }

    const checkSlug = await courseRepository.getCourseBySlug({
        slug: String(body.slug)
    })

    if (checkSlug) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, `Slug ${body.slug} sudah digunakan`)
    }

    const getExistingTopics = await topicRepository.getExistingTopics(body.topicIds)

    const existingTopicIds = new Set(getExistingTopics.map(topic => topic.id));

    const missingTopics = body.topicIds.filter(id => !existingTopicIds.has(id));

    if (missingTopics.length > 0) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, `Topic ID tidak ditemukan: ${missingTopics.join(", ")}`)
    }

    const course = await courseRepository.createCourse({ data: body })

    if (!course) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Gagal membuat course')
    }

    await syllabusRepository.createInitialSyllabus({ courseId: course.id })

    return course
}

export const getAllCourse = async ({
    query
}: {
    query: IQueryParams
}) => {
    // const accessToken = jwt.sign(
    //     {
    //         gid: 'oU9cIGesySVe2G1x8o3VljLHvrg2'
    //     },
    //     process.env.ACCESS_TOKEN || '',
    // );
    // console.log(accessToken)
    return await courseRepository.getAllCourse({
        query
    })
}