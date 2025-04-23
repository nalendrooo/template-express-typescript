import { prisma } from "../../setup/prisma"
import { IBodyCreateSyllabusContentLearningModel } from "./syllabus.model"

export const getSyllabusContentBySlug = async ({
    slug
}: {
    slug: string
}) => {
    return await prisma.syllabusContent.findFirst({
        where: {
            slug
        }
    })
}

export const createSyllabusContent = async ({
    data,
    syllabusId,
    order
}: {
    syllabusId: number
    order: number
    data: IBodyCreateSyllabusContentLearningModel
}) => {
    return await prisma.syllabusContent.create({
        data: {
            ...data,
            order,
            syllabusId
        }
    })
}

export const getLastOrderSyllabusContent = async ({
    syllabusId
}: {
    syllabusId: number
}) => await prisma.syllabusContent.findFirst({
    where: {
        syllabusId
    },
    orderBy: {
        order: 'desc'
    }
})
