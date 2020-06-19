import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './Header/index'
import Footer from './Footer/Index'
import Product from './Products/index'

import { getProduct } from '../utils/axios'

const Home = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProduct()
      .then(({ data }) => setProducts(data))
  }, [])
  
  return (
    <div>
      <Header/>
      <div className="Oferta">
        <p>Ofertas</p>
      </div>
      <div className="container">
        <div className="row center justify-content center ">
          {products.map((item,index) => (
            <Product 
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
