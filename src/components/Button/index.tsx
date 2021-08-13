import React from 'react'
import { Container } from './styles'

interface ButtonProps {
  primary?: boolean
}

const Button: React.FC<ButtonProps> = ({
  primary,
  children
}) => (
  primary ? 
  <Container primary >
  {children} 
 </Container> : 
 <Container >
   {children} 
  </Container>
)

export default Button;