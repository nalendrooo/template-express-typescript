import { ERROR_CODE, IQueryParams } from "../../interface";
import { AppError } from "../../middleware/error-handler";
import { slugRegex } from "../../utils/regex";
import * as topicRepository from "./topic.repository";
import * as subCategoryRepository from "../sub-category/sub-category.repository";
import { IBodyCreateTopicModel } from "./topic.model";

export const checkSlugTopic = async ({
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

    const checkSlug = await topicRepository.getTopicBySlug({
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

export const createTopic = async ({
    body,
    subCategoryId
}: {
    body: IBodyCreateTopicModel,
    subCategoryId: number
}) => {

    if (!slugRegex.test(String(body.slug))) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Slug hanya boleh berisi huruf, angka, dan strip (-)');
    }

    const subCategory = await subCategoryRepository.getSubCategoryById({
        subCategoryId
    })

    if (!subCategory) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Sub category tidak ditemukan')
    }

    const checkSlug = await topicRepository.getTopicBySlug({
        slug: String(body.slug)
    })

    if (checkSlug) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, `Slug ${body.slug} sudah digunakan`)
    }

    const lastTopic = await topicRepository.getLastOrderTopic({
        subCategoryId
    })

    if (!lastTopic) {
        return await topicRepository.createTopic({
            order: 1,
            data: body,
            subCategoryId
        })
    }

    return await topicRepository.createTopic({
        order: lastTopic.order + 1,
        data: body,
        subCategoryId
    })

}

export const getTopicBySubCategoryId = async ({
    query,
    subCategoryId
}: {
    query: IQueryParams,
    subCategoryId: number
}) => {
    return await topicRepository.getTopicBySubCategoryId({
        query,
        subCategoryId
    })
}
