import { ERROR_CODE, IQueryParams } from "../../interface";
import { AppError } from "../../middleware/error-handler";
import { slugRegex } from "../../utils/regex";
import { IBodyCreateSubCategoryModel } from "./sub-category.model";
import * as subCategoryRepository from "./sub-category.repository";
import * as categoryRepository from "../category/category.repository";

export const checkSlugSubCategory = async ({
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

    const checkSlug = await subCategoryRepository.getSubCategoryBySlug({
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

export const createSubCategory = async ({
    body,
    categoryId
}: {
    body: IBodyCreateSubCategoryModel,
    categoryId: number
}) => {

    if (!slugRegex.test(String(body.slug))) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Slug hanya boleh berisi huruf, angka, dan strip (-)');
    }

    const category = await categoryRepository.getCategoryById({
        categoryId
    })

    if (!category) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, 'Category tidak ditemukan')
    }

    const checkSlug = await subCategoryRepository.getSubCategoryBySlug({
        slug: String(body.slug)
    })

    if (checkSlug) {
        return new AppError(ERROR_CODE.BAD_REQUEST.code, `Slug ${body.slug} sudah digunakan`)
    }

    const lastSubCategory = await subCategoryRepository.getLastOrderSubCategory({
        categoryId
    })

    if (!lastSubCategory) {
        return await subCategoryRepository.createSubCategory({
            order: 1,
            data: body,
            categoryId
        })
    }

    return await subCategoryRepository.createSubCategory({
        order: lastSubCategory.order + 1,
        data: body,
        categoryId
    })

}

export const getSubCategoryByCategoryId = async ({
    query,
    categoryId
}: {
    query: IQueryParams,
    categoryId: number
}) => {
    return await subCategoryRepository.getSubCategoryByCategoryId({
        query,
        categoryId
    })
}