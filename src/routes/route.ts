import express from "express";
import adminRoute from '../app/admin/admin.route'
import { getAllMaterialContentType } from "../app/material-content-type/material-content-type.controller";
import { verifyToken } from "../middleware/verify-token";
import { Router } from "express";
import erklikaRoute from '../app/erklika/erklika.route'

export const publicRouter = Router();


publicRouter.get('/', (req, res) => {
    res.json('Hello World!');
});
publicRouter.get('/users', (req, res) => {
    res.json('Hello users!');
});
publicRouter.use('/admin', adminRoute);
publicRouter.use('/material', getAllMaterialContentType);
publicRouter.get('/access', verifyToken, erklikaRoute);