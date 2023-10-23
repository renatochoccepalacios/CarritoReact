import React from 'react'
import { data } from '../data'

export const ProductList = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => { /* desestructuramos */

    // creamos una funcion que va agregar el producto en el carrito
    const onAddProduct = product => {
        if(allProducts.find(item => item.id === product.id)) {/* utiliza find para que si el item.id es igual a product.id */

            // va a obtener del map
            const products = allProducts.map(item => item.id === product.id ? {...item, cantidad: item.cantidad + 1}
                : item ); /* si es verdadero va a retornar la cantidad + 1 */
            setTotal(total + product.precio * product.cantidad);
            setCountProducts(countProducts + product.cantidad)
            return setAllProducts([...products]);
        }

        setTotal(total + product.precio * product.cantidad); /* le sumamos el total que llevamos mas el precio */
        /* contador */
        setCountProducts(countProducts + product.cantidad);
        setAllProducts([...allProducts, product]); /* desestructuramos allProducts y le añadimos el producto */
    
    }

    console.log(allProducts)

    return (
    <div className='card-container'>
        {/* la data es un arreglo asi que usamos .map */}
        {data.map(product => (
            <div className='card-item' key={product.id}>
                <figure>
                    <img src={product.img} alt={product.nombre} />
                </figure>
            <div className="card-info">
                <span>{product.estado}</span>
                <h3>{product.nombre}</h3>
                <p className="card-des">{product.descripcion}</p>
                <p className="card-stock">{product.stock}</p>
                <p className="card-precio">$ {product.precio}</p>
                <button onClick={() => onAddProduct(product)} className="agregar-card">Agregar al carrito</button>
            </div>
            </div>
        ))}
    </div>

    )
}
