import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getProducts from '../services/getProduct';

const Home = () => {
    const [searchValue, setSearchValue] = useState("");
    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    useEffect(() => {
        getProducts(searchValue, currentPage).then((response) => {
            const res = response.data;
            setProductList([...res]);
            setMaxPage(response.lastPage);
        })
    }, [ searchValue, currentPage ]);

    return (
        <div className="home-container">
            <div className="home header-container">
                <input
                    type="text"
                    value={searchValue}
                    className="home searchbox"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <div className="home product-list-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        productList && productList.length > 0 && productList.map((product) => {
                            return (<tr key={product._id}>
                                <td><Link to={"/product/"+product._id}>{product.product_name}</Link></td>
                                <td>{product.product_price}</td>
                                <td></td>
                            </tr>)
                        })
                    }
                </table>
            </div>
            {
                currentPage < maxPage && <div className="home product-list-load" onClick={() => {
                    setCurrentPage(currentPage+1)
                }}>Load More</div>
            }            
        </div>
    );
}

export default Home;