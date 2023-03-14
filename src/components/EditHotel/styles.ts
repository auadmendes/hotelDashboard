import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  margin-top: 0.5rem;
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;

  h1 {
    font-size: 1.15rem;
  }

  textarea {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    padding: 1rem;
  }

  button {
    border: 0;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    padding: 0.7rem 1.25rem;

    cursor: pointer;
  }
`;