import React, {useState, useEffect} from 'react';

import {productoService} from '../../services/producto.service';
import Producto from '../widgets/Producto';

const ProductosPage = () => {

    const[productos, setProductos] = useState([]);

    const loadProducts = async () => {
        productoService.getAll().then( productos => {
            setProductos(productos);
        });
    }

    useEffect( () => {
        loadProducts();
    }, [])

    return (
        <div className="row">
            {
                productos.map( producto => (
                    <div className=" col-3 col-sm">
                        <Producto
                            key = {producto.id}
                            producto = {producto}
                        /> 
                    </div>
                ))
            }
            
        </div>
    );
};

export default ProductosPage;