import { SyllabusContentType } from "@prisma/client"
import { IBodyCreateMaterialContentLearningModel } from "../material-content-learning/material-content-learning.model"

export interface IBodyCreateSyllabusContentLearningModel {
    title: string
    type: SyllabusContentType
    slug: string
}

export interface IBodyCreateMaterialContentModel extends IBodyCreateMaterialContentLearningModel {
    title: string
    estimatedTime: number
    materialContentTypeId: number
    slug: string
}