import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 1rem 1.5rem 2rem 1rem;
  }

  div {    
    padding: 1rem;

    button {
      float: right;  
    }
    button:last-child {
      margin-right: 1rem;
    }
  }
`