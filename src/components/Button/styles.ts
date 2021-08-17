import styled from 'styled-components'

interface ContainerProps {
  primary?: boolean;
}

export const Container = styled.button<ContainerProps>`
    height: 2rem;
    width: 6rem;
    border: 1px solid var(--black);
    font-weight: bold;
    float: right;
    background: ${(props) => props.primary? "var(--black)" : "var(--shape)"};
    color: ${(props) => props.primary? "var(--shape)" : "var(--black)"};

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      border: 1px solid #999999;
      background-color: var(--border);
      color: var(--gray);
    }
`;