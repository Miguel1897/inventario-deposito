import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { v4 as uuidv4 } from 'uuid';
import './css/App.css';

const App = () => {
    const [products, setProducts] = useState([]);

    // Cargar productos del almacenamiento local
    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            setProducts(storedProducts);
        }
    }, []);

    // Guardar productos en el almacenamiento local
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const addProduct = (product) => {
   
        const existingProduct = products.find(p => p.id === product.id || p.name === product.name);
        if (existingProduct) {
            alert('Ya existe un producto con este ID o nombre.');
            return; 
        }
        const newProduct = { ...product, id: uuidv4() };
        setProducts([...products, newProduct]);
    };

    const updateProduct = (updatedProduct) => {
        setProducts(products.map(product => 
            product.id === updatedProduct.id ? updatedProduct : product
        ));
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div>
            <h1>Inventario del Depósito(ABM)</h1>
            <ProductForm addProduct={addProduct} />
            <ProductList 
                products={products} 
                updateProduct={updateProduct} 
                deleteProduct={deleteProduct} 
            />
        </div>
    );
};

export default App;
