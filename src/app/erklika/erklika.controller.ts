import { type NextFunction, type Request, type Response } from 'express'
import { AppError } from '../../middleware/error-handler'
import { ResponseHandler } from '../../utils/response-handler'
import * as erklikaService from './erklika.service'

export const checkAccessUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {

    const data = await erklikaService.assignAccessErklika({
        gid: String(req.token?.gid)
    })

    if (data instanceof AppError) {
        next(data)
        return
    }

    ResponseHandler.ok(res, null)
}