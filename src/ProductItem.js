import React, { useState } from 'react';
import './css/ProductItem.css';

const ProductItem = ({ product, updateProduct, deleteProduct }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(product.name);
    const [ean, setEan] = useState(product.ean);
    const [quantity, setQuantity] = useState(product.quantity);

    const handleUpdate = () => {
        updateProduct({ ...product, name, ean, quantity }); // Aquí se actualiza un producto existente con su ID
        setIsEditing(false);
    };

    return (
        <div className="product-item">
            {isEditing ? (
                <div className="product-item-edit">
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        value={ean} 
                        onChange={(e) => setEan(e.target.value)} 
                    />
                    <input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(parseInt(e.target.value))} 
                    />
                    <button onClick={handleUpdate}>Aceptar</button>
                    <button onClick={() => setIsEditing(false)}>Cancelar</button>
                </div>
            ) : (
                <div className="product-item-view">
                    <span className="product-quantity">{quantity}</span>
                    <span className="product-name">{name}</span>
                    <span className="product-ean">{ean}</span>
                    <button className="edit-button" onClick={() => setIsEditing(true)}>✏️</button>
                    <button className="delete-button" onClick={() => deleteProduct(product.id)}>🗑️</button>
                </div>
            )}
        </div>
    );
};

export default ProductItem;
