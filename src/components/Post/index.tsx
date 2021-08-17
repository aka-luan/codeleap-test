import React, { useState } from 'react'
import { Container } from './styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { deletePost, editPost } from '../../actions/posts.store'
import { DeletePostModal } from '../DeletePostModal'
import { EditPostModal } from '../EditPostModal'

interface PostProps {
  id: string,
  user: string,
  title: string,
  content: string,
  timestamp: Date,
}

interface EditedProps {
  id: string,
  title: string,
  content: string
}

const Post: React.FC<PostProps> = ({
  id,
  user,
  title,
  content,
  timestamp,

}) => {

  const usernameState = useSelector ((state: RootState) => state.username.value)
  const dispatch = useDispatch()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  }

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  }

  const handleDeletePost = (id: string) => {
    handleCloseDeleteModal()
    dispatch(deletePost(id))
  }

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  }

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  }

  const handleEditPost = (editedPost: EditedProps) => {
    handleCloseEditModal()
    dispatch(editPost(editedPost))
  }   
  
  return (    
    <Container>
      <DeletePostModal isOpen={isDeleteModalOpen} onRequestClose={handleCloseDeleteModal} onDeletePost={() => handleDeletePost(id)} id={id}/>
      <EditPostModal isOpen={isEditModalOpen} onRequestClose={handleCloseEditModal} onEditPost={handleEditPost} id={id}/>
      <header className="post-header">      
        <div>
          <h2>{title}</h2>
          { usernameState === user ? 
          <div className="buttons-container">
            <button><DeleteForeverIcon style={{ color: "white" }} onClick={handleOpenDeleteModal}/></button>
            <button><EditIcon style={{ color: "white" }} onClick={handleOpenEditModal}/></button>
          </div> 
          : ''
          }                  
        </div>        
      </header>
      <div className="subheader">
          <p>@{user}</p>          
          <p>{moment(timestamp).fromNow()}</p>
      </div>
      <div className="post-content">        
        <p>{content}</p>
      </div>
    </Container>
  )
}

export default Post