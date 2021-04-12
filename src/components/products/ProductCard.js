import React from 'react'
import PropTypes from 'prop-types'

function ProductCard({product}) {
    return (
        <div className='card'>
            <img className='card-img-top' src={product.photo} alt='product'/>
            <div className='card-body'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text'>{product.description}</p>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductCard

