import { IQueryParams } from "../../interface";
import { prisma } from "../../setup/prisma";
import { IBodyCreateSubCategoryModel } from "./sub-category.model";

export const getSubCategoryBySlug = async ({
    slug
}: {
    slug: string
}) => {
    return await prisma.subCategory.findFirst({
        where: {
            slug
        }
    })
}

export const getSubCategoryById = async ({
    subCategoryId
}: {
    subCategoryId: number
}) => {
    return await prisma.subCategory.findFirst({
        where: {
            id: subCategoryId
        }
    })
}

export const getSubCategoryByCategoryId = async ({
    query,
    categoryId
}: {
    query: IQueryParams,
    categoryId: number
}) => {
    const {
        page,
        perPage,
        search
    } = query

    return await prisma.subCategory.findMany({
        where: {
            categoryId,
            title: {
                contains: search
            }
        },
        skip: (Number(page) - 1) * Number(perPage),
        take: Number(perPage),
    })
}

export const createSubCategory = async ({
    data,
    order,
    categoryId
}: {
    data: IBodyCreateSubCategoryModel,
    order: number
    categoryId: number
}) => {
    return await prisma.subCategory.create({
        data: {
            ...data,
            categoryId,
            order
        }
    })
}

export const getLastOrderSubCategory = async ({
    categoryId
}: {
    categoryId: number
}) => {
    return await prisma.subCategory.findFirst({
        where: {
            categoryId
        },
        orderBy: {
            order: 'desc'
        }
    })
}