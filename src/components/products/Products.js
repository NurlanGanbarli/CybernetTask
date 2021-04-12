import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

export default function Products() {
    const [products, setProducts] = useState([]);
    const { url } = useRouteMatch();

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('http://localhost:5000/products', config)
                console.log(res.data);
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

    return (
        <div className='products-page'>
            <h3>Products</h3>
            <div className='row'>
                {
                    products.map(product => {
                        return (
                            <div className='col-md-3 col-12' key={product.id}>
                                <Link to={`${url}/${product.id}`}>
                                    <ProductCard product={product}/>
                                </Link>
                            </div>
                        )
                        
                    })
                }
            </div>
        </div>
    )
}
