import Category from '../models/category'
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';
// export const create = (req , res) => {
//    const category = new Category(req.body); 
//    category.save((err, data) => {
//        if (err) {
//         return res.status(400).json({
//             error: "Không thêm được danh mục"
//         })
//        }
//        res.json(data)
//    })
// }

export const create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Thêm danh mục thành công"
            });
        }
        const { name } = fields;
        if (!name) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }
        let category = new Category(fields);

        if (files.photo) {
            if (files.photo.size > 100000) {
                res.status(400).json({
                    error: "Bạn nên upload ảnh dưới 1mb"
                })
            }
            category.photo.data = fs.readFileSync(files.photo.path);
            category.photo.contentType = files.photo.type;
        }
        category.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Không thêm được danh mục"
                })
            }
            res.json(data);
        })

    })
}

export const list = (req, res) => {
    Category.find((err, categories) => {
        if (err) {
            return res.status(400).json({
                error: "Không có danh mục nào tồn tại"
            })
        }
        res.json(categories);
    })
}

// export const list = (res, res) => {
//     try {
//         Category.find((err, categories) => {
//             res.json(categories);
//         })

//     } catch (err) {
//         return res.status(500).json({ msg: err.message })
//     }
// }



export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            res.status(400).json({
                error: "Không tìm thấy danh mục"
            })
        }
        req.category = category;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.category)
}

export const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Sửa danh mục thành công"
            });
        }
        const { name } = fields;
        if (!name) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }
        // let category = new Category(fields);
        let category = req.category;
        category = _.assignIn(category, fields);
        if (files.photo) {
            if (files.photo.size > 100000) {
                res.status(400).json({
                    error: "Bạn nên upload ảnh dưới 1mb"
                })
            }
            category.photo.data = fs.readFileSync(files.photo.path);
            category.photo.contentType = files.photo.type;
        }
        category.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Không thêm được danh mục"
                })
            }
            res.json(data);
        })

    })
}
// export const update = (req, res) => {
//     const category = req.category;
//     category.name = req.body.name;
//     category.save((err, data) => {
//         if (err || !category) {
//             res.status(400).json({
//                 error: "Danh mục này không tồn tại"
//             })
//         }
//         res.json(data);
//     })
// }
export const remove = (req, res) => {
    let category = req.category;
    category.remove((err, deletedCategory) => {
        if (err || !category) {
            res.status(400).json({
                error: "Danh mục  này không tồn tại"
            })
        }
        res.json({
            deletedCategory,
            message: "Xóa danh mục thành công"
        });

    })
}

// router.get("/product/photo/:productId", photo)
export const photo = (req, res, next) => {
    if (req.category.photo.data) {
        res.set("Content-Type", req.category.photo.contentType);
        return res.send(req.category.photo.data);
    }
    next();
}