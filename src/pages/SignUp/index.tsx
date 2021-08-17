import React, { SyntheticEvent, useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container } from './styles'
import { useDispatch } from 'react-redux'
import { submitUsername } from '../../actions/username.store'
import { Link } from 'react-router-dom'


export function SignUp() {
  const [inputValue, setInputValue] = useState<string>('')
  const dispatch = useDispatch()

  const inputChangeHandler = (e: SyntheticEvent) => {
    const newInputValue = (e.target as HTMLInputElement).value
    setInputValue(newInputValue)
  }

  const btnClickHandler = () => {
    dispatch(submitUsername(inputValue))
  }


  return (
    <Container>
      <h2>Welcome to CodeLeap network!</h2>
      <label>Please enter your username</label>
      <Input placeholder='e.g: John Doe'onChange={e => inputChangeHandler(e)}/>
      <Link to="/dashboard">
      {inputValue.length > 0 ? 
        <Button primary onClick={() => {btnClickHandler()}} >ENTER</Button> 
        :
        <Button primary onClick={() => {btnClickHandler()}} disabled>ENTER</Button>    
      }
      
      </Link>
      
    </Container>
  )
}