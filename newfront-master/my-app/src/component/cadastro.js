import React, { useReducer, useCallback } from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import {Input } from 'reactstrap'
import './App.css';

import Header from './Header/index'

import { postRegister } from '../utils/axios'

const initialState = {
  username: '',
  password: '',
  email: '',
  creditCard: {
    number: '',
    name: '',
    dataExp: ''
  },
  address: {
    address: '',
    number: '',
    city: '',
    cep: '',
    deliver: true
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'user':
      return {
        ...state,
        [action.field]: action.data
      }
    case 'creditCard':
      return {
        ...state,
        creditCard: {
          ...state.creditCard,
          [action.field]: action.data
        }
      }
    case 'address':
      return {
        ...state,
        address: {
          ...state.address,
          [action.field]: action.data
        }
      }
    default:
      return state
  }
}

const Cadastro = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick = useCallback(() => {
    postRegister({ ...state })
      .catch(() => alert('PREENCHE ESTA MERDA CORRETAMENTE'))
  }, [state])

  return (
    <div>
      <Header/>
        <div className="containerForm">
            <div>
              <h2>Dados pessoais:</h2>
              <hr />
            </div>
            <Form.Row>

            <Col sm={12} md={6}>
              <Form.Group >
                <Form.Label>Nome</Form.Label>
                <Input 
                  value={state.username}
                  type="name"
                  name="Nome"
                  id="nome"
                  placeholder="Digite seu nome completo"
                  onChange={(e) => dispatch({
                    type: 'user',
                    field: 'username',
                    data: e.target.value,
                  })}
                />
              </Form.Group>
              </Col>

              <Form.Group as={Col} >
                <Form.Label>Senha</Form.Label>
                <Input
                  value={state.password}
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="Digite uma senha" 
                  onChange={(e) => dispatch({
                    type: 'user',
                    field: 'password',
                    data: e.target.value
                  })}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Input
                value={state.email}
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail" 
                onChange={(e) => dispatch({
                  type: 'user',
                  field: 'email',
                  data: e.target.value
                })}
              />
            </Form.Group>

            <div>
              <h2>Dados do cartão do crédito:</h2>
              <hr />
            </div>

            <Form.Row>

              <Form.Group as={Col} >
                <Form.Label>Cartão de crédito</Form.Label>
                <Input
                  value={state.creditCard.number}
                  name="numeroDoCartao"
                  id="numeroDoCartao"
                  placeholder="Digite o número do cartão"
                  onChange={(e) => dispatch({
                    type: 'creditCard',
                    field: 'number',
                    data: e.target.value
                  })}
                />
              </Form.Group>


              <Col sm={12} md={6}>
                <Form.Group>
                  <Form.Label>Nome</Form.Label>
                  <Input
                    value={state.creditCard.name}
                    type="text"
                    name="Nome-do-cartao"
                    id="NomeCartao"
                    placeholder="Digite o nome gravado no cartão" 
                    onChange={(e) => dispatch({
                      type: 'creditCard',
                      field: 'name',
                      data: e.target.value
                    })}
                  />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col md={2} sm={5}>
                <Form.Group>
                  <Form.Label>Data de expiração</Form.Label>
                  <Input
                    value={state.creditCard.dataExp}
                    type="month"
                    name="dataExpiracao"
                    id="dataExpiracao"
                    pattern="\d\d/\d\d" 
                    onChange={(e) => dispatch({
                      type: 'creditCard',
                      field: 'dataExp',
                      data: e.target.value
                    })}
                  />
                </Form.Group>
              </Col>
            </Form.Row>


            <div>
              <h2>Endereço:</h2>
              <hr />
            </div>

            <Form.Row>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Rua</Form.Label>
                  <Input
                    value={state.address.address}
                    type="name"
                    name="Nome"
                    id="nome"
                    placeholder="Digite sua rua " 
                    onChange={(e) => dispatch({
                      type: 'address',
                      field: 'address',
                      data: e.target.value
                    })}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Número</Form.Label>
                  <Input
                    value={state.address.number}
                    name="Numero"
                    id="numero"
                    placeholder="Digite seu numero"
                    onChange={(e) => dispatch({
                      type: 'address',
                      field: 'number',
                      data: e.target.value
                    })}
                  />
                </Form.Group>
              </Col>
            </Form.Row>


            <Form.Row>
              <Col md={8} sm={12}>
                <Form.Group>
                  <Form.Label>Cidade</Form.Label>
                  <Input
                    value={state.address.city}
                    type="name"
                    name="Cidade"
                    id="cidade"
                    placeholder="Digite sua cidade " 
                    onChange={(e) => dispatch({
                      type: 'address',
                      field: 'city',
                      data: e.target.value
                    })}
                  />
                </Form.Group>
              </Col>
              <Col md={3} sm={12}>
                <Form.Group>
                  <Form.Label>CEP</Form.Label>
                  <Input
                    value={state.address.cep}
                    name="CEP"
                    id="CEP"
                    placeholder="Digite seu CEP" 
                    onChange={(e) => dispatch({
                      type: 'address',
                      field: 'cep',
                      data: e.target.value
                    })}
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={1}>
                <Form.Group>
                  <Form.Label>Delivery</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Não"
                    value={state.address.deliver}
                    onChange={(e) => dispatch({
                      type: 'address',
                      field: 'deliver',
                      data: e.target.value
                    })}
                  >
                    <option value={true}>Sim</option>
                    <option value={false}>Não</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <div className="d-flex justify-content-center">
            <Button className="ButtonCadastro" onClick={handleClick}>
              Cadastrar
            </Button>
            </div>
        </div>
    </div>
  )
}

export default Cadastro
