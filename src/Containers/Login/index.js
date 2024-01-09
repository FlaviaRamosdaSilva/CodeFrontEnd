import React from 'react'

import LoginImg from '../../assets/login-img.svg'
import Logo from '../../assets/logo.svg'
import {
  Button,
  Container,
  ContainerItens,
  Input,
  Label,
  LoginImage,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-Image" />
      <ContainerItens>
        <img src={Logo} alt="logo-CodeBurger" />
        <h1>Login</h1>

        <Label>E-mail</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Sign In</Button>

        <SignInLink>
          Não possui conta ? <a>Sign Up</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
