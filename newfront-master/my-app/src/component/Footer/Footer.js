import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";
import Cartao from '../cartao.png';
import {
   Image
} from 'react-bootstrap'

const Footer = () => {
  
    return (
      <MDBFooter color="cyan" className="font-small darken-3 pt-0">
      <div>
        <div className="MarginFooter">
          <p>FORMAS DE PAGAMENTO</p>
        </div>
      </div>
      <div>
        <div className="MarginFooter">
          <p>Cartões de Crédito</p>
        </div>
      </div>
      <div>
        <div><Image className="ImgFooter" src={Cartao}></Image></div>

      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>

          &copy; {new Date().getFullYear()} Copyright

        </MDBContainer>
      </div>
    </MDBFooter>
      )
  }
  
  export default Footer;