import React from 'react';

import salgadinho from './salgadinho.jpg';

import Product from './Products/index';
import Header from './Header/index';
import Footer from './Footer/Index';


const produtos = [
  {
  "id": 1,
  "name" : "comida",
  "price" : "R$ 4,00",
  "img" : salgadinho
  },

  {
    "id": 2,
    "name" : "comida",
    "price" : "R$ 4,00",
    "img" : salgadinho
  },

  {
    "id": 3,
    "name" : "comida",
    "price" : "R$ 4,00",
    "img" : salgadinho
  },

  {
    "id": 4,
    "name" : "comida",
    "price" : "R$ 4,00",
    "img" : salgadinho
  },

  {
    "id": 5,
    "name" : "comida",
    "price" : "R$ 4,00",
    "img" : salgadinho
  },

  {
    "id": 6,
    "name" : "comida",
    "price" : "R$ 4,00",
    "img" : salgadinho
  },
  {
    "id": 5,
    "name" : "comida",
    "price" : "R$ 4,00",
    "img" : salgadinho
  },

  {
    "id": 5,
    "name" : "comida",
    "price" : "R$ 4,00",
    "img" : salgadinho
  },
  {
    "id": 5,
    "name" : "comida",
    "price" : "R$ 4,00",
    "img" : salgadinho
  },

  {
    "id": 5,
    "name" : "comida",
    "price" : "R$ 4,00",
    "img" : salgadinho
  }

]

const Comidas = (props) => {
  

  return (



    <div >
       <Header/>
    <div className="Oferta">
        <p>Comidas</p>
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
export default Comidas;