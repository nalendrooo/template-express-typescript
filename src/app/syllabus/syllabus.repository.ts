import { prisma } from "../../setup/prisma"

export const getSyllabusByCourseId = async ({
    courseId
}: {
    courseId: number
}) => {
    return await prisma.syllabus.findMany({
        where: {
            courseId
        },
        select: {
            id: true,
            title: true,
            description: true,
            SyllabusContent: {
                select: {
                    id: true,
                    title: true,
                    type: true,
                    order: true,
                    slug: true,
                    MaterialContents: true,
                    Exams: true
                }
            }
        }
    })
}

export const createInitialSyllabus = async ({
    courseId
}: {
    courseId: number
}) => {
    return await prisma.syllabus.create({
        data: {
            courseId,
            description: 'Deskripsi',
            title: 'Silabus',
        }
    })
}

