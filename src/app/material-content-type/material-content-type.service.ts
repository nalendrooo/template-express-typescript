import * as materialContentTypeRepository from './material-content-type.repository'
import { AppError } from '../../middleware/error-handler'
import { ERROR_CODE } from '../../interface'

export const getAllMaterialContentType = async () => {
    const materialContentType = await materialContentTypeRepository.getAllMaterialContentType()

    if (!materialContentType) {
        throw new AppError(ERROR_CODE.DATA_NOT_FOUND.code, ERROR_CODE.DATA_NOT_FOUND.message)
    }
    return materialContentType
}