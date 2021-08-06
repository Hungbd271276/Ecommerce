import express from 'express';
import { userById } from '../controllers/user';
import { update, list, create, productById, read, remove, photo,  } from '../controllers/product';
import { requireSignin, isAuth, isAdmin } from '../controllers/auth';
const routes = express.Router();

// Add sản phẩm
routes.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
// danh sach sp
routes.get('/products',  list);
// update sản phẩm
routes.put('/product/create/:userId/:productId', requireSignin, isAuth, isAdmin,  update);
// Product Detail
routes.get('/product/:productId', read);
// delete sp
routes.delete('/product/create/:userId/:productId', requireSignin, isAuth, isAdmin,  remove);

routes.param('productId', productById);


routes.get("/product/photo/:productId", photo);
routes.param('userId', userById)
module.exports = routes;