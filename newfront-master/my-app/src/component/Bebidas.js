import React from 'react';

import cerveja from './cerveja.jpg';

import Product from './Products/index';
import Header from './Header/index';
import Footer from './Footer/Index';


const produtos = [
  {
  "id": 1,
  "name" : "cerveja 1",
  "price" : "R$ 10,00",
  "img" : cerveja
  },

  {
    "id": 2,
    "name" : "cerveja 2",
    "price" : "R$ 10,00",
    "img" : cerveja
  },

  {
    "id": 3,
    "name" : "cerveja 3",
    "price" : "R$ 10,00",
    "img" : cerveja
  },

  {
    "id": 4,
    "name" : "cerveja 4",
    "price" : "R$ 10,00",
    "img" : cerveja
  },

  {
    "id": 5,
    "name" : "cerveja 6",
    "price" : "R$ 10,00",
    "img" : cerveja
  },

  {
    "id": 6,
    "name" : "cerveja 6",
    "price" : "R$ 10,00",
    "img" : cerveja
  },
  {
    "id": 5,
    "name" : "cerveja 6",
    "price" : "R$ 10,00",
    "img" : cerveja
  },

  {
    "id": 5,
    "name" : "cerveja 6",
    "price" : "R$ 10,00",
    "img" : cerveja
  },
  {
    "id": 5,
    "name" : "cerveja 6",
    "price" : "R$ 10,00",
    "img" : cerveja
  },

  {
    "id": 5,
    "name" : "cerveja 6",
    "price" : "R$ 10,00",
    "img" : cerveja
  }

]

const Bebidas = (props) => {
  

  return (



    <div >
       <Header/>
    <div className="Oferta">
        <p>Bebidas</p>
      </div>
      <div className="container">
        <div className="row center justify-content center ">
          {produtos.map((item,index) => (
            <Product 
              key={index}
              data={item}/>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
    





  );
};
export default Bebidas;