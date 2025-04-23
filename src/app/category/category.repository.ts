import { IQueryParams } from "../../interface";
import { prisma } from "../../setup/prisma";
import { IBodyCreateCategoryModel } from "./category.model";

export const getCategoryBySlug = async ({
    slug
}: {
    slug: string
}) => {
    return await prisma.category.findFirst({
        where: {
            slug
        }
    })
}

export const getCategoryById = async ({
    categoryId
}: {
    categoryId: number
}) => {
    return await prisma.category.findFirst({
        where: {
            id: categoryId
        }
    })
}

export const getAllCategory = async ({
    query
}: {
    query: IQueryParams
}) => {
    const {
        page,
        perPage,
        search
    } = query

    return await prisma.category.findMany({
        where: {
            title: {
                contains: search
            }
        },
        skip: (Number(page) - 1) * Number(perPage),
        take: Number(perPage),
    })
}

export const createCategory = async ({
    data,
    order
}: {
    data: IBodyCreateCategoryModel,
    order: number
}) => {
    return await prisma.category.create({
        data: {
            ...data,
            order
        }
    })
}

export const getLastOrderCategory = async () => {
    return await prisma.category.findFirst({
        orderBy: {
            order: 'desc'
        }
    })
}
