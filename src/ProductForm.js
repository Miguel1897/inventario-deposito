import React, { useState } from 'react';
import './css/ProductForm.css';

const ProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [ean, setEan] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ name, ean, quantity }); // Aquí se agrega un nuevo producto con un nuevo ID generado por uuidv4()
        setName('');
        setEan('');
        setQuantity(1);
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nombre del producto" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Código EAN" 
                value={ean} 
                onChange={(e) => setEan(e.target.value)} 
                required 
            />
            <input 
                type="number" 
                placeholder="Cantidad" 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value))} 
                required 
            />
            <button type="submit">Aceptar</button>
            <button type="button" onClick={() => setName('')}>Cancelar</button>
        </form>
    );
};

export default ProductForm;
