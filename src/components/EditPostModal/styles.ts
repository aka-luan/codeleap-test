import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;

  h2 {
    margin-bottom: 2rem;
  }

  label {
    margin-bottom: 1rem;
  }

  input, textarea {
    margin-bottom: 1.5rem;

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
  
  .modal-btn {
    float: right;
  }
`