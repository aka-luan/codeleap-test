import styled from 'styled-components'

export const Container = styled.div`
  width: 440px;
  background: var(--shape);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  padding: 1rem 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    margin: 1rem 0 1.5rem 0;
  }

  label {
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }

  input {
    margin-bottom: 1rem;
  }

  button {
    margin-left: auto;
  }

`