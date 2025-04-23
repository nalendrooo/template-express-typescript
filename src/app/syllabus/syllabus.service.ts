import * as syllabusRepository from './syllabus.repository'

export const getSyllabusByCourseId = async ({
    courseId
}: {
    courseId: number
}) => {
    const syllabus = await syllabusRepository.getSyllabusByCourseId({ courseId })
    return syllabus[0]
}