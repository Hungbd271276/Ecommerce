import Contact from '../models/Contact';

export const create = (req, res) => {
    const contactsss = new Contact(req.body);
    contactsss.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Không thêm được contact"
            })
        }
        res.json(data);
    });
}

export const list = (req, res) => {
    Contact.find((err, contacts) => {
        if (err) {
            return res.status(400).json({
                error: 'Không tìm thấy sản phẩm'
            })
        }
        res.json(contacts);
    })
}


export const contactById = (req, res, next, id) => {
    Contact.findById(id).exec((err, contact) => {
        if (err || !contact) {
            res.status(400).json({
                error: 'Contact not found'
            })
        }
        req.contact = contact;
        next();
    })
}

export const remove = (req, res) => {
    let contact = req.contact;
    contact.remove((err, deleteContact) => {
        if (err) {
            res.status(400).json({
                error: 'không tìm thất sản phẩm để xóa'
            })
        }
        res.json({
            deleteContact,
            message: "sản phẩm đã xóa thành công"
        })
    })
}