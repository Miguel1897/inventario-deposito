import React from 'react';
import ProductItem from './ProductItem';
import './css/ProductList.css';

const ProductList = ({ products, updateProduct, deleteProduct }) => {
    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="product-list">
            {sortedProducts.map(product => (
                <ProductItem 
                    key={product.id} 
                    product={product} 
                    updateProduct={updateProduct} 
                    deleteProduct={deleteProduct} 
                />
            ))}
        </div>
    );
};

export default ProductList;
