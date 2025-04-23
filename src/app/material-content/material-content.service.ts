import { ERROR_CODE, IQueryParams } from "../../interface";
import { AppError } from "../../middleware/error-handler";
import { slugRegex } from "../../utils/regex";
import * as materialContentRepository from "./material-content.repository";
import * as courseRepository from "../course/course.repository";

export const checkSlugMaterialContent = async ({
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

    const checkSlug = await materialContentRepository.getMaterialContentBySlug({
        slug: String(slug)
    })

    if (checkSlug) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, `Slug ${slug} sudah digunakan`)
    }

    return
}

export const getMaterialContentById = async ({
    materialContentId,
    courseId
}: {
    materialContentId: number
    courseId: number
}) => {
    const course = await courseRepository.getCourseById({ courseId })

    if (!course) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Course tidak ditemukan')
    }


    return await materialContentRepository.getMaterialContentById({ materialContentId })
}
