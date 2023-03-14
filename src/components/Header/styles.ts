import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;

  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: bold;

  padding: 0 3rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    h2 {
      margin-right: 3rem;
    }

    a {
      border: 0;
      background: transparent;
      color: ${({ theme }) => theme.colors.text};
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;