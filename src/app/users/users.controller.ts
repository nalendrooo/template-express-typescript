// import { type NextFunction, type Request, type Response } from 'express'
// import { AppError } from '../../middleware'
// import { ResponseHandler } from '../../utils/response-handler'
// import * as userService from './users.services'

// export const createUser = async (
//     req: Request,
//     res: Response,
//     next: NextFunction,
// ) => {
//     const { body } = req
//     const user = await userService.createUser(body)
//     if (user instanceof AppError) {
//         next(user)
//         return
//     }
//     ResponseHandler.ok(res, user, `User ${user.username} berhasil dibuat`)
// }

// export const loginUser = async (
//     req: Request,
//     res: Response,
//     next: NextFunction,
// ) => {
//     const { body } = req
//     const user = await userService.loginUser(body, res)
//     if (user instanceof AppError) {
//         next(user)
//         return
//     }

//     res.cookie('accessToken', user.token, {
//         httpOnly: false,
//         maxAge: 24 * 60 * 60 * 1000,
//         secure: false,
//         // sameSite: 'none',
//     })
//     ResponseHandler.ok(res, user, 'User berhasil login')
// }

// export const logoutUser = async (
//     req: Request,
//     res: Response,
//     next: NextFunction,
// ) => {
//     const user = await userService.logoutUser(req.body, res)
//     if (user instanceof AppError) {
//         next(user)
//         return
//     }
//     ResponseHandler.ok(res, null, 'User berhasil logout')
// }

// export const checkUsernameExist = async (
//     req: Request,
//     res: Response,
// ) => {
//     const { body } = req
//     const user = await userService.checkUsernameExist(body)


//     ResponseHandler.ok(res, user, 'Username berhasil di cek')
// }
// export const getProfile = async (
//     req: Request,
//     res: Response,
// ) => {
//     const { body } = req
//     const user = await userService.getProfile(body)


//     ResponseHandler.ok(res, user, 'Profile berhasil di ambil')
// }