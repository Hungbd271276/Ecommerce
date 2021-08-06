import React, { useState } from 'react'

const FilterCategory = (props) => {
    const { filterss, cates } = props;
    const [category, setCategory] = filterss.categorys
    const [sorts, setSort] = filterss.sort
    const [searchs, setSearch] = filterss.search
    console.log(cates)
    const handleCategory = (e) => {
        setCategory(e.target.value)
        setSearch("");
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-md-12">
                    <h2 className="font-weight-bold">Our Featured</h2>
                    <hr />
                    <p>Here you can check out new product width fair price on rymo.</p>
                </div>
                <div className="col-xl-5 col-md-12 " style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div className="row">
                        <span>Filters: </span>
                        <select name="category" value={category} onChange={handleCategory} >
                            <option value=''>All Products</option>
                            {
                                cates.map(category => (
                                    <option value={"category=" + category._id} key={category._id}>
                                        {category.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="row" >
                        <span>Sort By: </span>
                        <select value={sorts} onChange={e => setSort(e.target.value)}>
                            <option value=''>Newest</option>
                            <option value='sort=oldest'>Oldest</option>
                            <option value='sort=sold'>Best sales</option>
                            <option value='sort=-price'>Price: Hight-Low</option>
                            <option value='sort=price'>Price: Low-Hight</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilterCategory
