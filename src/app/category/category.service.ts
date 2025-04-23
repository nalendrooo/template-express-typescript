import { ERROR_CODE, IQueryParams } from "../../interface";
import { AppError } from "../../middleware/error-handler";
import { slugRegex } from "../../utils/regex";
import { IBodyCreateCategoryModel } from "./category.model";
import * as categoryRepository from "./category.repository";

export const checkSlugCategory = async ({
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

    const checkSlug = await categoryRepository.getCategoryBySlug({
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

export const createCategory = async ({
    body,
}: {
    body: IBodyCreateCategoryModel
}) => {

    if (!slugRegex.test(String(body.slug))) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Slug hanya boleh berisi huruf, angka, dan strip (-)');
    }

    const checkSlug = await categoryRepository.getCategoryBySlug({
        slug: String(body.slug)
    })

    if (checkSlug) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, `Slug ${body.slug} sudah digunakan`)
    }

    const lastCategory = await categoryRepository.getLastOrderCategory()

    if (!lastCategory) {
        return await categoryRepository.createCategory({
            order: 1,
            data: body,
        })
    }

    return await categoryRepository.createCategory({
        order: lastCategory.order + 1,
        data: body,
    })
}

export const getAllCategory = async ({
    query
}: {
    query: IQueryParams
}) => {
    return await categoryRepository.getAllCategory({
        query
    })
}