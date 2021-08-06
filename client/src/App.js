
import React, { useEffect, useState } from 'react';
import Routers from './Routers';
import ProductAPI from './API/ProductAPI'
import CategoryAPI from './API/CategoryAPI';
import { isAuthenTicate } from './auth/Index';
import ContactAPI from './API/Contact';
import axios from 'axios';
import { API } from './Config';

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [contact, setContact] = useState([]);

  // filter,sort, panagation Product
  const [callback, setCallback] = useState(false)
  const [categorys, setCategorys] = useState('')
  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [result, setResult] = useState(0)


  // ADD TO CART
  const [isLogin, setIsLogin] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('addtoCart'));
    if (dataCart) {
      setCart(dataCart);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('addtoCart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    isAuthenTicate() && setIsLogin(true);
  }, [isLogin]);

  const AddCart = async (product) => {
    if (!isLogin) return alert("Vui lòng đăng nhập trước khi mua hàng")
    const check = cart.every(item => {
      return item._id !== product._id
    })

    // if (check) {
    //   const data = product.filter(products => {
    //     return products._id === id
    //   })
    if (check) {
      //setCart([...cart, ...data ])
      setCart([...cart, { ...product, quantity: 1 }])
    } else {
      alert('Sản phẩm đã được thêm vào giỏ hàng')
    }
  }

  const value = {
    product: [product, setProduct],
    cart: [cart, setCart],
    AddCart: AddCart
  }
  // END ADD TO CART

  // Filter , sort, search
  const productFilter = {
    categorys: [categorys, setCategorys],
    sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    result: [result, setResult]
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        // const { data: productss } = await ProductAPI.getAll();
        // setProduct(productss.products);
        const { data: productss } = await axios.get(`${API}/products?limit=${page * 10}&${categorys}&${sort}&name[regex]=${search}`);
        setProduct(productss.products);
        setResult(productss.result);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [callback, categorys, sort, search, page]);

  // call Category
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data: categorys } = await CategoryAPI.getAll();
        setCategory(categorys);
      } catch (error) {
        console.log(error);
      }
    }
    getCategory();
  }, []);

  // call Contact
  useEffect(() => {
    const getContact = async () => {
      try {
        const { data: contacts } = await ContactAPI.getAll();
        setContact(contacts);
      } catch (error) {
        console.log(error);
      }
    }
    getContact();
  }, [])



  // Thêm sản phẩm
  const onHandleAdd = async (products) => {
    try {
      const { data } = await ProductAPI.add(products);
      setProduct([
        ...product,
        data
      ])
    } catch (error) {
      console.log(error);
    }
  }

  // Sửa sản phẩm
  const onHandleEdit = async (id, products) => {
    //  console.log('hihi', product)
    try {
      const { data } = await ProductAPI.update(id, products);
      const newProduct = product.map(item => (item._id === id ? data : item))
      setProduct(newProduct);
    } catch (error) {
      console.log(error);
    }
  }

  // Xóa sản phẩm
  const onHadleDelete = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newTodo = product.filter(todo => todo._id !== id);
      setProduct(newTodo);
      //console.log(todos);
    } catch (error) {
      console.log(error);
    }
  }



  // Add category 
  const onAddcate = async (categorys) => {
    try {
      const { data } = await CategoryAPI.add(categorys)
      // console.log(data);
      setCategory([
        ...category,
        data
      ])
    } catch (error) {
      console.log(error);
    }
  }
  // update category
  const onHandleEditCate = async (id, categorys) => {
    try {
      const { data } = await CategoryAPI.update(id, categorys);
      const newCate = category.map(item => (item._id === id ? data : item));
      setCategory(newCate);
    } catch (error) {
      console.log(error);
    }
  }

  // xóa danh mục 
  const OnDelete = async (id) => {
    try {
      const ondelete = window.confirm('Bạn có muốn xóa không');
      if (ondelete) {
        await CategoryAPI.remove(id);
        //  console.log('data cate', deletedCategory);
        const newDelete = category.filter(todo => todo._id !== id)
        setCategory(newDelete)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // ADD contact
  const AddContact = async (contacts) => {
    try {
      const { data } = await ContactAPI.add(contacts);
      setContact([
        ...contact,
        data
      ])
    } catch (error) {
      console.log(error);
    }
  }

  // delete Contact
  const onDeleteContact = async (id) => {
    try {
      const ondelete = window.confirm('Bạn có muốn xóa không');
      if (ondelete) {
        await ContactAPI.remove(id);
        const newDelete = contact.filter(item => item._id !== id)
        setContact(newDelete);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">

      <Routers
        data={product}
        onDelete={onHadleDelete}
        onAdd={onHandleAdd}
        onEdit={onHandleEdit}
        cates={category}
        addCate={onAddcate}
        DeleteCate={OnDelete}
        onCateEdit={onHandleEditCate}
        values={value}
        contacts={contact}
        onDeleteContact={onDeleteContact}
        onAddContact={AddContact}

        // filter ,sorts, search
        // callback={callback}
        // sort={sort}
        // categorysss={categorys}
        // search={search}
        // page={page}
        // result={result}
        filterss={productFilter}

      />
    </div>
  );
}

export default App;
