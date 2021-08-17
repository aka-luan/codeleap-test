import Modal from 'react-modal'
import Button from '../Button'
import { Container } from './styles'

interface DeletePostModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
  id: string,
  onDeletePost: (id: string) => void
}

export const DeletePostModal = ({ isOpen, onRequestClose, onDeletePost, id }: DeletePostModalProps) => (
  <Modal isOpen={isOpen}
   onRequestClose={onRequestClose}
   overlayClassName="react-modal-overlay"
   className="react-modal-content"
   >
    <Container>
      <p>Are you sure you want to delete this item?</p>
      <div>
        <Button onClick={() => onDeletePost(id)}>Yes</Button>
        <Button onClick={onRequestClose}>No</Button>
      </div>
    </Container>
    
  </Modal>
)