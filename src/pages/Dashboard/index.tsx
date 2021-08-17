import React, { SyntheticEvent, useState } from 'react'
import { Container } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Post from '../../components/Post'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { submitPost } from '../../actions/posts.store'
import { v4 as uuid } from 'uuid'

export const Dashboard = () => {
  const posts = useSelector ((state: RootState) => state.posts.value)
  const usernameState = useSelector ((state: RootState) => state.username.value )
  const dispatch = useDispatch()

  const [titleValue, setTitleValue] = useState<string>('')
  const [contentValue, setContentValue] = useState<string>('')

  const inputChangeHandler = (e: SyntheticEvent) => {
    const newTitleValue = (e.target as HTMLInputElement).value
    setTitleValue(newTitleValue)

  }

  const textareaChangeHandler = (e: SyntheticEvent) => {
    const newContentValue = (e.target as HTMLTextAreaElement).value
    setContentValue(newContentValue)

  }

  const btnClickHandler = () => {
    const newPost = {
      id: uuid(),
      username: usernameState,
      title: titleValue,
      content: contentValue,
      timestamp: new Date()
    }

    setTitleValue('')
    setContentValue('')
    
    dispatch(submitPost(newPost))    
  }

  return (
    <Container>
      <header className="dashboard-header">
        <h1>CodeLeap Network</h1>
      </header>
      <div className="form-container">
        <h2>What's on your mind?</h2>
        <form>
          <label>Title</label>
          <Input id="title" type="text" placeholder="Title name" onChange={ e => inputChangeHandler(e)} value={titleValue}></Input>
          <label>Content</label>
          <textarea id="content" placeholder="Content here" onChange={ e => textareaChangeHandler(e)} value={contentValue}></textarea>
        </form>
        {(titleValue.length > 0 || contentValue.length > 0) ? 
        <Button primary onClick={() => {btnClickHandler()}}>CREATE</Button> 
        :
        <Button primary onClick={() => {btnClickHandler()}} disabled>CREATE</Button>    
      }
      </div>

      <ul>
        {posts.map(post => ( <li key={post.id}>
          <Post id={post.id} user={post.username} title={post.title} content={post.content} timestamp={post.timestamp} />
        </li>))} 
      </ul>

    
    </Container>
    
  )
}
