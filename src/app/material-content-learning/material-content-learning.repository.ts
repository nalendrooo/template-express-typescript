import { prisma } from "../../setup/prisma"
import { IBodyCreateMaterialContentLearningModel, IBodyCreateMaterialContentModel } from "../admin/admin.model"

export const createMaterialContentLearning = async ({
    data,
    materialContentId,
}: {
    materialContentId: number
    data: IBodyCreateMaterialContentLearningModel
}) => {
    return await prisma.materialContentLearning.create({
        data: {
            content: data.content,
            materialContentId
        }
    })
}

// export const getMaterialContentById = async ({
//     materialContentId
// }: {
//     materialContentId: number
// }) => {
//     return await prisma.materialContent.findFirst({
//         where: {
//             id: materialContentId
//         },
//         include: {
//             MaterialContentLearning: true,
//             Attachments: true,
//             File: true,
//             MaterialContentTest: true,
//         }
//     })
// }