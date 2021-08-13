import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container } from './styles'

export function SignUp() {
  return (
    <Container>
      <h2>Welcome to CodeLeap network!</h2>
      <label>Please enter your username</label>
      <Input placeholder='e.g: John Doe'/>
      <Button primary >ENTER</Button>
    </Container>
  )
}