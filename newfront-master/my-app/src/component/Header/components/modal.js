import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom'

import Modal from '../../Modal'
import { TOKEN } from '../../../constants'

import { postLogin } from '../../../utils/axios'
import { REGISTER_ROUTE } from '../../../constants'

import {
  Container,
  SubContainer,
  ContainerMainInput,
  ContainerInputLabel,
  ContainerInput,
  ContainerMainError,
  Input,
  ModalButton,
} from '../styled';

const SignInModal = ({ showModalLogin, setShowModalLogin, setLogged }) => {
  const history = useHistory()
  const [form, setForm] = useState({ username: '', password: '' })
  const [formError, setFormError] = useState(false);

  const signIn = useCallback(() => {
    if (!form.username || !form.password) {
      return
    }
    postLogin(form)
      .then(({ data }) => localStorage.setItem(TOKEN, data.token))
      .then(() => setLogged(true))
      .then(() => setFormError(false))
      .then(() => setShowModalLogin(false))
      .catch((e) => {
        setFormError(true)
        setLogged(false)
      })
  }, [form, setShowModalLogin, setFormError, setLogged])

  return (
    <Modal
      show={showModalLogin}
      toggleModal={setShowModalLogin}
      loginModal
    >
      <Container>
        <SubContainer>                        
          <ContainerMainInput>
            <ContainerInputLabel>Email</ContainerInputLabel>
            <ContainerInput>
              <Input
                placeholder="email@email.com"
                type="email"
                name="email"
                onChange={(event) => {
                  const username = event.target.value
                  setForm(old => ({
                    ...old,
                    username
                  }))
                }}
              />
            </ContainerInput>
          </ContainerMainInput>
          <ContainerMainInput>
            <ContainerInputLabel>Senha</ContainerInputLabel>
            <ContainerInput>
              <Input
                type="password"
                placeholder="Digite sua senha"
                name="password"
                onChange={(event) => {
                  const password = event.target.value 
                  setForm(old => ({
                    ...old,
                    password
                  }))
                }}
              />
            </ContainerInput>
          </ContainerMainInput>
          {
            formError && (
              <ContainerMainError>
                <span>Usuario invalido</span>
              </ContainerMainError>
            )
          }
        </SubContainer>
          <SubContainer>
            <ModalButton
                backgroundColor="#D65108"
                textColor="#FFFFFF"
                onClick={() => signIn()}
            >
              Entrar
            </ModalButton>
          </SubContainer>
          <SubContainer>
            <ModalButton
              backgroundColor="#E0E0E0"
              textColor="#3E278F"
              onClick={() => history.push(REGISTER_ROUTE)}
            >
              Criar nova conta
            </ModalButton>
          </SubContainer>
      </Container>
    </Modal>
  )
}

export default SignInModal
