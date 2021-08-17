import { SyntheticEvent, useState } from 'react'
import Modal from 'react-modal'
import Button from '../Button'
import Input from '../Input'
import { Container } from './styles'

interface EditPostModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
  onEditPost: (editedPost: EditedPost) => void,
  id: string
}

interface EditedPost {
  id: string,
  title: string,
  content: string
}


export const EditPostModal = ({ isOpen, onRequestClose, onEditPost, id }: EditPostModalProps) => {
  const [titleValue, setTitleValue] = useState<string>('')
  const [contentValue, setContentValue] = useState<string>('')

  const inputEditHandler = (e: SyntheticEvent) => {
    const newTitleValue = (e.target as HTMLInputElement).value
    setTitleValue(newTitleValue)
  }

  const textareaEditHandler = (e: SyntheticEvent) => {
    const newContentValue = (e.target as HTMLTextAreaElement).value
    setContentValue(newContentValue)
  }

  const btnClickHandler = () => {
    const editedTitleContent = {
      id: id,
      title: titleValue,
      content: contentValue    
    }

    onEditPost(editedTitleContent)
  }

  return (
    <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Edit item</h2>
        <label>Title</label>
        <Input id="title" type="text" placeholder="Title name" onChange={e => inputEditHandler(e)} value={titleValue}></Input>
        <label>Content</label>
        <textarea id="content" placeholder="Content here" onChange={e => textareaEditHandler(e)} value={contentValue}></textarea>
      </Container>
      {
        (titleValue.length > 0 || contentValue.length > 0) ?
        <Button primary onClick={btnClickHandler}>SAVE</Button>
        :
        <Button primary disabled onClick={btnClickHandler}>SAVE</Button>
      }

    </Modal>
  )
}

