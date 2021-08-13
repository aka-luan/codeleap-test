import React, {InputHTMLAttributes} from 'react'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
}

const Input: React.FC<InputProps> = ({
  ...rest
}) => (
  <Container {...rest}/>
)

export default Input