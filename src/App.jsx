import { useState } from 'react'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'

function App() {
  /* creamos tres useState que serian los estados*/
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0)

  return (
    <>
      {/* Les pasamos las propiedades */}
      <Header 
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts = {countProducts}
        setCountProducts = {setCountProducts}

      
      />
      <ProductList 
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts = {countProducts}
        setCountProducts = {setCountProducts}

      />
    
    </>
  )

  
}

export default App
