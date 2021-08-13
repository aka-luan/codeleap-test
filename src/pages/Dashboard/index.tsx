import React from 'react'
import { Container } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Post from '../../components/Post'

export const Dashboard = () => {
  return (
    <Container>
      <header className="dashboard-header">
        <h1>CodeLeap Network</h1>
      </header>

      <div className="form-container">
        <h2>What's on your mind?</h2>
        <form>
          <label>Title</label>
          <Input id="title" type="text" placeholder="Title name"></Input>
          <label>Content</label>
          <textarea id="content" placeholder="Content here"></textarea>
        </form>
        <Button primary>CREATE</Button>
      </div>

      <Post />
    
    </Container>
    
  )
}
