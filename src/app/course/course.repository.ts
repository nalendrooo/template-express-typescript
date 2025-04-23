import { IQueryParams } from "../../interface"
import { prisma } from "../../setup/prisma"
import { IBodyCreateCourseModel } from "./course.model"

export const createCourse = async ({
    data
}: {
    data: IBodyCreateCourseModel
}) => {
    return await prisma.course.create({
        data
    })
}

export const getAllCourse = async ({
    query
}: {
    query: IQueryParams
}) => {
    const {
        page = 1,
        perPage = 10,
        search
    } = query

    return await prisma.course.findMany({
        where: {
            title: {
                contains: search
            }
        },
        skip: (Number(page) - 1) * Number(perPage),
        take: Number(perPage),
    })
}

export const getCourseBySlug = async ({
    slug
}: {
    slug: string
}) => {
    return await prisma.course.findFirst({
        where: {
            slug
        }
    })
}

export const getCourseById = async ({
    courseId
}: {
    courseId: number
}) => {
    return await prisma.course.findFirst({
        where: {
            id: courseId
        },
        select: {
            title: true,
            description: true,
            Syllabus: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    })
}