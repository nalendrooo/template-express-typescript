import { IQueryParams } from "../../interface";
import { erklikaPrisma, prisma } from "../../setup/prisma";
import { IBodyCreateTopicModel } from "./topic.model";

export const getTopicBySlug = async ({
    slug
}: {
    slug: string
}) => {
    return await prisma.topic.findFirst({
        where: {
            slug
        }
    })
}

export const getTopicById = async ({
    topicId
}: {
    topicId: number
}) => {
    return await prisma.topic.findFirst({
        where: {
            id: topicId
        }
    })
}

export const getTopicBySubCategoryId = async ({
    query,
    subCategoryId
}: {
    query: IQueryParams,
    subCategoryId: number
}) => {
    const {
        page,
        perPage,
        search
    } = query

    return await prisma.topic.findMany({
        where: {
            subCategoryId,
            title: {
                contains: search
            }
        },
        skip: (Number(page) - 1) * Number(perPage),
        take: Number(perPage),
    })
}

export const createTopic = async ({
    data,
    order,
    subCategoryId
}: {
    data: IBodyCreateTopicModel,
    order: number
    subCategoryId: number
}) => {
    return await prisma.topic.create({
        data: {
            ...data,
            subCategoryId,
            order
        }
    })
}

export const getLastOrderTopic = async ({
    subCategoryId
}: {
    subCategoryId: number
}) => {
    
    return await prisma.topic.findFirst({
        where: {
            subCategoryId
        },
        orderBy: {
            order: 'desc'
        }
    })
}

export const getExistingTopics = async (topicIds: number[]) => {
    return await prisma.topic.findMany({
        where: {
            id: {
                in: topicIds
            }
        },
        select: {
            id: true
        }
    })
}
