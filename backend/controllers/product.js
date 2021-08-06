import Product from '../models/product';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';
import { json } from 'body-parser';
import { match } from 'assert';

// FILTER, SORT, PANAGATION
class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString
    }
    filter() {
        const queryObj = { ...this.queryString } //this.queryString = req.query
        //  console.log({ before: queryObj }); // before delete page
        const excludedFields = ['page', 'sort', 'limit'];
        excludedFields.forEach(el => delete (queryObj[el]));
        // console.log({ after: queryObj }); // after delete page
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match);
        // gte = greater than or equal
        // lte = Lesser than or equal
        // lt = Lesser than
        // gt = greater than
        this.query.find(JSON.parse(queryStr))
        return this;
    }
    sorting() {
        // if (this.queryString.sort) {
        //     const sortBy = this.queryString.sort.split(',').join(' ');
        //     console.log(sortBy);
        // }
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }
    paginating() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

export const create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Them  sản phẩm không thành công"
            });
        }
        const { name, description, price, category } = fields;
        if (!name || !description || !price || !category) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }
        let product = new Product(fields);
        // 1kb = 1000;
        // 1mb = 100000;

        if (files.photo) {
            if (files.photo.size > 100000) {
                res.status(400).json({
                    error: " Bạn nên upload ảnh dưới 1mb"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }

        product.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Không them được sản phẩm"
                })
            }
            res.json(data);
        })
    })
}

export const productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            res.status(400).json({
                error: "Không tìm thấy sản phẩm"
            })
        }
        req.product = product;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.product);
}
export const remove = (req, res) => {
    let product = req.product;
    product.remove((err, deletedProduct) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được sản phẩm"
            })
        }
        res.json({
            product: deletedProduct,
            message: "Sản phẩm đã được xóa thành công"
        })
    })
}
// export const list = (req, res) => {
//     Product.find((err, data) => {
//         // const features = new APIfeatures(Product.find(), req.query);
//         // const products = features.query;

//         if (err) {
//             error: "khong tim thay san pham"
//         }
//         res.json(data)
//     })
// }

export const list = async (req, res) => {
    try {
        const features = new APIfeatures(Product.find(), req.query)
            .filter().sorting().paginating();
        const products = await features.query
        res.json({
            status: 'success',
            result: products.length,
            products: products

        })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


export const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Sửa sản phẩm không thành công"
            });
        }
        const { name, description, price, category } = fields;
        if (!name || !description || !price || !category) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }
        // let product = new Product(fields);
        // 1kb = 1000;
        // 1mb = 100000;
        let product = req.product;
        product = _.assignIn(product, fields);
        if (files.photo) {
            if (files.photo.size > 100000) {
                res.status(400).json({
                    error: " Bạn nên upload ảnh dưới 1mb"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }

        product.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Không sửa được sản phẩm"
                })
            }
            res.json(data);
        })
    })
}
// router.get("/product/photo/:productId", photo)
export const photo = (req, res, next) => {
    if (req.product.photo.data) {
        res.set("Content-Type", req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }
    next();
}



