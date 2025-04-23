import { type NextFunction, type Request, type Response } from 'express'
import { ResponseHandler } from "../../utils/response-handler"
import { AppError } from '../../middleware/error-handler'
import { SyllabusContentType } from '@prisma/client'
import * as materialContentTypeService from './material-content-type.service'
import { ERROR_CODE } from '../../interface'

export const getAllMaterialContentType = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {

    const data = await materialContentTypeService.getAllMaterialContentType()

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, data, `Data berhasil diambil`)
}