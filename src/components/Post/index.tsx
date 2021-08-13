import React from 'react'
import { Container } from './styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const Post: React.FC = () => {
  return (
    <Container>
      <header className="post-header">
        <div>
          <h2>First post here!</h2>
          <div className="buttons-container">
            <button><DeleteForeverIcon style={{ color: "white" }}/></button>
            <button><EditIcon style={{ color: "white" }}/></button>
          </div>          
        </div>        
      </header>
      <div className="subheader">
          <p>@Username</p>          
          <p>10min</p>
      </div>
      <div className="post-content">        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

    </Container>
  )
}

export default Post