import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

function ProductDetail() {
    const { id } = useParams();
    const [ product, setProduct ] = useState({
        id: null,
        title: '',
        description: '',
        photo: ''
    })
    

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    useEffect(() => {
        (async() => {
            try {
                const res = await axios.get(`http://localhost:5000/products/${id}`, config)
                console.log(res.data);
                setProduct(res.data);
            } catch (error) {
                console.log(error)
            }
        })()
    }, [id])

    return (
        <div className='product-detail'>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <div className='photo'>
                        <img src={product.photo} alt='product'/>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='info'>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ProductDetail.propTypes = {
//     product: PropTypes.object.isRequired,
// }

export default ProductDetail

