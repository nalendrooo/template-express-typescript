// import { PrismaClient } from "@prisma/client"
// import { IArgUser, IBodyUser } from "./users.model"

// const db = new PrismaClient()

// export const createUser = async (data: IBodyUser, hashedPassword: string) => {
//     return await db.user.create({
//         data: {
//             password: hashedPassword,
//             username: data.username,
//             nama: data?.nama,
//             telephone: data?.telephone,
//         },
//     })
// }

// export const getUserByUsername = async (username: string) => {
//     return await db.user.findUnique({
//         where: {
//             username
//         },
//         include: {
//             userRole: {
//                 select: {
//                     role: {
//                         select: {
//                             nama: true
//                         }
//                     }
//                 }
//             }
//         }
//     })
// }

// export const getUserById = async (id: number) => {
//     return await db.user.findUnique({
//         where: {
//             id
//         },

//         select: {
//             username: true,
//             email: true,
//             telephone: true,
//             orders: {
//                 include: {
//                     userAdmin: {
//                         select: {
//                             email: true,
//                             username: true,
//                             nama: true,
//                             telephone: true,
//                             userRole: {
//                                 select: {
//                                     roleId: true
//                                 }
//                             }
//                         }
//                     },
//                     jenisIklan: true,
//                     bidang: true,
//                     waktuPostOrders: {
//                         include: {
//                             postOrderLink: true
//                         }
//                     },
//                     contentOrders: true,
//                     pembayaranOrder: {
//                         include: {
//                             metodePembayaran: true
//                         }
//                     },
//                     paket: true,
//                     tambahanPaketOrders: {
//                         include: {
//                             tambahanPaket: true
//                         }
//                     }
//                 }
//             },

//             createdAt: true,
//             userRole: {
//                 select: {
//                     role: {
//                         select: {
//                             nama: true
//                         }
//                     }
//                 }
//             }
//         },
//     })
// }

// export const updateAccessToken = async (data: IArgUser) => {
//     return await db.userAccessToken.create({
//         data
//     })
// }


// export const getAccessToken = async (userId: number) => {
//     return await db.userAccessToken.findFirst({
//         where: {
//             userId
//         }
//     })
// }
// export const deleteAccessToken = async (userId: number) => {
//     return await db.userAccessToken.delete({
//         where: {
//             userId
//         }
//     })
// }
// export const createUserRole = async (userId: number, roleId: number) => {
//     return await db.userRole.create({
//         data: {
//             userId,
//             roleId
//         }
//     })
// }
// export const getRole = async () => {
//     return await db.role.count()
// }

// export const checkUsernameExist = async (username: string) => {
//     return await db.user.count({
//         where: {
//             username
//         }
//     })
// }

// export const getUserByRole = async (role: number) => {
//     return await db.user.findMany({
//         where: {
//             userRole: {
//                 some: {
//                     roleId: role
//                 }
//             }
//         },
//         select: {
//             id: true,
//             username: true,
//             nama: true,
//             email: true,
//             telephone: true,
//             createdAt: true
//         }
//     })
// }

// export const updatePassword = async (id: number, password: string) => {
//     return await db.user.update({
//         where: {
//             id
//         },
//         data: {
//             password
//         }
//     })
// }