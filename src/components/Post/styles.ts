import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  padding: 0 2rem;
  margin-top: 2rem;

  .post-header {    
    background: var(--black);
    color: var(--shape);
    padding: 1.5rem 2rem;
    margin: 0 -2rem;
    
    div {
      display: flex;
      justify-content: space-between;

      .buttons-container {
        
        button {
          background: var(--black);
          border: 0;
          cursor: pointer;
        }

        button:first-child {
          margin-right: 1rem;
        }
      }
    }
    
  }

  .subheader {
    display: flex;
    color: var(--gray);
    justify-content: space-between;
    margin: 1rem 0;

    p:first-child {
      font-weight: bold;
    }
  }

  .post-content {
    margin-bottom: 2rem;
  }
`