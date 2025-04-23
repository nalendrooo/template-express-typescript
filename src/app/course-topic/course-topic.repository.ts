import { prisma } from "../../setup/prisma"
import { IBodyCreateCourseTopicModel } from "./course-topic.model"

export const createCourseTopic = async ({
    data
}: {
    data: IBodyCreateCourseTopicModel
}) => {
    return await prisma.courseTopic.createMany({
        data: data.topicIds.map((topicId) => ({
            topicId,
            courseId: data.courseId
        })),
        skipDuplicates: true
    });
}
