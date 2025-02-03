// import { Router } from 'express'
// import { validateRequest } from '../../middleware/validate-request'
// import { checkUsernameUserSchema, createUserSchema, loginUserSchema } from './users.request'
// import { verifyToken } from '../../middleware/verify-token'
// import { checkUsernameExist, createUser, getProfile, loginUser, logoutUser } from './users.controller'

// const route = Router()

// route.post('/', validateRequest(createUserSchema), createUser)
// route.post('/login', validateRequest(loginUserSchema), loginUser)
// route.delete('/logout', verifyToken, logoutUser)
// route.get('/profile', verifyToken, getProfile)
// route.post('/cek-username', validateRequest(checkUsernameUserSchema), checkUsernameExist)

// export default route    