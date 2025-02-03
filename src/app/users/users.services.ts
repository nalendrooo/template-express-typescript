// import bcrypt from 'bcrypt';
// import dotenv from 'dotenv';
// import jwt from 'jsonwebtoken';
// import { ERROR_CODE, IJWTPayload } from '../../interface';
// import { AppError } from "../../middleware";
// import * as userRepository from './users.repository';
// import { IBodyUser } from "./users.model";
// import { Response } from 'express';

// dotenv.config()

// export const createUser = async (data: IBodyUser) => {

//     const cekUsername = await userRepository.checkUsernameExist(data.username)

//     if (cekUsername) {
//         return new AppError(
//             ERROR_CODE.BAD_REQUEST.code,
//             'Username sudah digunakan',
//         )
//     }
//     const salt = await bcrypt.genSalt()
//     const hashPassword = await bcrypt.hash(data.password, salt)

//     const role = await userRepository.getRole()
//     if (!role) {
//         return new AppError(
//             ERROR_CODE.BAD_REQUEST.code,
//             'Role tidak ditemukan',
//         )
//     }
//     const user = await userRepository.createUser(data, hashPassword)




//     if (!user) {
//         return new AppError(
//             ERROR_CODE.BAD_REQUEST.code,
//             'User gagal dibuat',
//         )
//     }

//     if (data?.type === 'admin') {
//         await userRepository.createUserRole(user.id, 2)
//     } else {
//         await userRepository.createUserRole(user.id, 3)
//     }

//     return { username: user?.username }
// }


// export const loginUser = async (data: IBodyUser, res: Response) => {
//     const user = await userRepository.getUserByUsername(data.username)

//     if (!user) {
//         return new AppError(
//             ERROR_CODE.NOT_FOUND.code,
//             'User tidak ditemukan',
//         )
//     }

//     const match = await bcrypt.compare(data.password, user.password)

//     if (!match) {
//         return new AppError(
//             ERROR_CODE.UNAUTHORIZED.code,
//             'Password tidak sesuai',
//         )
//     }

//     const cekAccessToken = await userRepository.getAccessToken(user.id);

//     const accessToken = jwt.sign(
//         {
//             username: data.username,
//             id: user.id,
//             nama: user?.nama,
//             role: user?.userRole[0].role.nama
//         },
//         process.env.ACCESS_TOKEN || '',
//         // { expiresIn: '1d' }
//     );

//     if (cekAccessToken) {
//         await userRepository.deleteAccessToken(user.id);
//     }

//     await userRepository.updateAccessToken({
//         userId: user.id,
//         token: accessToken,
//     });



//     return {
//         token: accessToken,
//     };
//     // if (cekAccessToken) {
//     //     const token = cekAccessToken.token;

//     //     try {
//     //         jwt.verify(token, process.env.ACCESS_TOKEN || '');

//     //         return {
//     //             token: cekAccessToken.token,
//     //         };
//     //     } catch (err: any) {
//     //         if (err.name === 'TokenExpiredError') {
//     //             await userRepository.deleteAccessToken(user.id);

//     //             const newAccessToken = jwt.sign(
//     //                 {
//     //                     username: data.username,
//     //                     id: user.id,
//     //                     nama: user?.nama,
//     //                     role: user?.userRole[0].role.nama
//     //                 },
//     //                 process.env.ACCESS_TOKEN || '',
//     //                 { expiresIn: '1d' }
//     //             );

//     //             await userRepository.updateAccessToken({
//     //                 userId: user.id,
//     //                 token: newAccessToken,
//     //             });

//     //             return {
//     //                 token: newAccessToken,
//     //             };
//     //         }

//     //         throw new Error('Invalid token');
//     //     }
//     // } else {
//     //     const accessToken = jwt.sign(
//     //         {
//     //             username: data.username,
//     //             id: user.id,
//     //             nama: user?.nama,
//     //             role: user?.userRole[0].role.nama
//     //         },
//     //         process.env.ACCESS_TOKEN || '',
//     //         { expiresIn: '1d' }
//     //     );

//     //     await userRepository.updateAccessToken({
//     //         userId: user.id,
//     //         token: accessToken,
//     //     });



//     //     return {
//     //         token: accessToken,
//     //     };
//     // }

// }

// export const logoutUser = async (data: { id: number }, res: Response) => {

//     const user = await userRepository.deleteAccessToken(data.id)

//     res.clearCookie('accessToken', {
//         httpOnly: true,
//         secure: true,
//         sameSite: 'none',
//     })
//     return user

// }


// export const checkUsernameExist = async (body: { username: string }) => {
//     return await userRepository.checkUsernameExist(body.username)
// }

// export const getProfile = async (body: IJWTPayload) => {

//     const user = await userRepository.getUserById(body.id)

//     if (!user) {
//         return new AppError(
//             ERROR_CODE.NOT_FOUND.code,
//             'User tidak ditemukan',
//         )
//     }

//     return user
// }