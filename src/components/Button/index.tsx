import React, { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
}

const Button: React.FC<ButtonProps> = ({
  primary,
  children,
  ...rest
}) => (
  primary ? 
  <Container primary  {...rest}>
  {children} 
 </Container> : 
 <Container {...rest}>
   {children} 
  </Container>
)

export default Button;