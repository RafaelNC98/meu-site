import React from 'react';

import note from './notebook.jpg';

import Product from './Products/index';
import Header from './Header/index';
import Footer from './Footer/Index';


const produtos = [
  {
  "id": 1,
  "name" : "note",
  "price" : "R$ 1000,00",
  "img" : note
  },

  {
    "id": 2,
    "name" : "note",
  "price" : "R$ 1000,00",
  "img" : note
  },

  {
    "id": 3,
    "name" : "note",
    "price" : "R$ 1000,00",
    "img" : note
  },

  {
    "id": 4,
    "name" : "note",
    "price" : "R$ 1000,00",
    "img" : note
  },

  {
    "id": 5,
    "name" : "note",
  "price" : "R$ 1000,00",
  "img" : note
  },

  {
    "id": 6,
    "name" : "note",
  "price" : "R$ 1000,00",
  "img" : note
  },
  {
    "id": 5,
    "name" : "note",
  "price" : "R$ 1000,00",
  "img" : note
  },

  {
    "id": 5,
    "name" : "note",
    "price" : "R$ 1000,00",
    "img" : note
  },
  {
    "id": 5,
    "name" : "note",
  "price" : "R$ 1000,00",
  "img" : note
  },

  {
    "id": 5,
    "name" : "note",
  "price" : "R$ 1000,00",
  "img" : note
  }

]

const Outros = (props) => {
  

  return (



    <div >
       <Header/>
    <div className="Oferta">
        <p>Outros</p>
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
export default Outros;