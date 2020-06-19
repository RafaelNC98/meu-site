import React, { useMemo } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button,
} from 'reactstrap';

const Header = ({ id, name, price, image, qtd }) => {
  const formatPrice = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(price)
  }, [price])

  return (
    <div className="col-md-4 col-lg-2">
      <Card className="Card ">
        <CardImg className="imgProduto" top width="100%" src={image} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{formatPrice}</CardSubtitle>
          <Button>Comprar</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Header;
