import express from 'express';
const routes = express.Router();
import { userById } from '../controllers/user';
import { create, list, categoryById, read, update, remove, photo } from '../controllers/category';
import { requireSignin, isAuth, isAdmin } from '../controllers/auth';
// category
// thêm danh mục
routes.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
// danh sách danh mục
routes.get('/categories', list);
// chi tiết
routes.get('/category/:categoryId', read);
// update danh mục
routes.put('/category/create/:userId/:categoryId', requireSignin, isAuth, isAdmin, update);
// delete danh muc
routes.delete('/category/create/:userId/:categoryId', requireSignin, isAuth, isAdmin, remove);
// chi tiết danh mục
routes.param("categoryId", categoryById);

routes.get("/category/photo/:categoryId", photo);
routes.param('userId', userById)
module.exports = routes;