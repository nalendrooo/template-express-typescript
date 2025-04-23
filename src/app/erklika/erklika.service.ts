import { ERROR_CODE } from '../../interface'
import { AppError } from '../../middleware/error-handler'
import * as userRepository from '../users/users.repository'
import * as erklikaRepository from './erklika.repository'

export const assignAccessErklika = async ({
    gid
}: {
    gid: string
}) => {

    const checkUser = await userRepository.getUserById({
        gid
    })

    if (!checkUser) {
        const checkErklika = await erklikaRepository.getUserById({
            gid
        })

        if (!checkErklika) {
            return new AppError(ERROR_CODE.BAD_REQUEST.code, 'User tidak ditemukan')
        } else {
            return await userRepository.insertUser({
                data: checkErklika,
            })
        }
    }

    return checkUser
}