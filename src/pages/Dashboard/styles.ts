import styled from 'styled-components'

export const Container = styled.main`
  display: block;
  max-width: 640px;
  margin: 0 auto;
  background: var(--shape);
  padding: 0 3rem 2rem 3rem; 

  .dashboard-header {
    height: 5rem;
    padding: 0 3rem;
    margin: 0 -3rem;
    color: var(--shape);
    background: var(--black);
    display: flex;
    align-items: center;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border);
    margin: 3rem 0 0 0;
    padding: 1rem 2rem;

    h1 {
        margin-bottom: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        margin: 1rem 0 0.5rem 0;
      }

      textarea {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-shadow: none;
        resize: none;
        border: 1.5px solid var(--gray);
        border-radius: 5px;
        height: 5rem;
        padding: 0 0.5rem;

        ::placeholder {
          color: lightgray
        } 
      }
    }

    button {
      margin: 2rem 0 0 0;
      margin-left: auto;
    }
  }

  ul {
      list-style: none;
  }
`