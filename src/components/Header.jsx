import React, { useState } from 'react'

export const Header = ({allProducts, setAllProducts, total, countProducts}) => {

    const [active, setActive] = useState(false)
    
  return (
    <header>
        <div className="header-icon">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/412/small/nike-logo-black-with-name-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt=""  />
        </div>
    <div className="contenedor-carrito" >
        <div className="input-buscador">
            <input type="search" placeholder="¿Qué estás buscando?" id="Buscador" />
        </div>
        <div className="container-icon" onClick={ () => setActive(!active)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-cart">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <div className="count-products">
                <span id="contador-productos">{countProducts}</span>
            </div>

            <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}> {/* si active es verdadero no le va a poner ninguna clase en caso contrario le va a poner la clase 'hidden-cart' */}
                {
                    allProducts.length ? ( /* si el carrito esta con un producto, nos va a mostrar todo esto */
                        <>
                        {/* <div className='row-product' > */}
                        {allProducts.map(product => (
                            <div className="cart-product" key={product.id}>
                            <div className="info-cart-product">

                                <span className="cantidad-producto-carrito">{product.cantidad}</span>
                                <img src={product.img} alt={product.nombre} className='img-product'/>

                                <p className="titulo-producto-carrito">{product.nombre}</p>
                                <span className="precio-producto-carrito">{product.precio}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </div>
                        ))}
                        
                <div className="cart-total">
                    <h3>Total:</h3>
                    <span className="total-pagar">$ {total}</span>
                </div>
                <button className='btn-vaciar-carrito'>Vaciar carrito</button>
                {/* </div> */}
                        </>
                    ) : (
                <span className='card-mensaje'>El carrito esta vacio</span> /* caso contrario va a mostrar este span */
                        
                    )
                }
            </div>
        </div>
    </div>
    </header>
  )
}
