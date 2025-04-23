import { prisma } from "../../setup/prisma"
import { IBodyCreateMaterialContentModel } from "../admin/admin.model"

export const createMaterialContent = async ({
    data,
    syllabusContentId,
    order
}: {
    syllabusContentId: number
    order: number
    data: IBodyCreateMaterialContentModel
}) => {
    return await prisma.materialContent.create({
        data: {
            ...data,
            syllabusContentId,
            order,
        }
    })
}

export const getMaterialContentById = async ({
    materialContentId
}: {
    materialContentId: number
}) => {
    return await prisma.materialContent.findFirst({
        where: {
            id: materialContentId
        },
        include: {
            MaterialContentLearning: true,
            Attachments: true,
            File: true,
            MaterialContentTest: true,
        }
    })
}

export const getMaterialContentBySlug = async ({
    slug
}: {
    slug: string
}) => {
    return await prisma.materialContent.findFirst({
        where: {
            slug
        }
    })
}

export const getLastOrderMaterialContent = async ({
    syllabusContentId
}: {
    syllabusContentId: number
}) => await prisma.materialContent.findFirst({
    where: {
        syllabusContentId
    },
    orderBy: {
        order: 'desc'
    }
})
