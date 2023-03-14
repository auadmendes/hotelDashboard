import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  max-width: 720px;

  //border: 1px solid red;
  padding: 1rem 2rem;
  margin: 0 auto;

  form {
    
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    
    
    width: 100%;

    input, select{
      width: 80%;
      height: 2rem;
      background: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.text};
      border: 0;
      border-radius: 4px;
      padding: 0.5rem;
    }

    span {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    textarea {
      width: 80%;
      
      background: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.text};
      border: 0;
      border-radius: 4px;
      padding: 0.5rem;
    }

    button {
      width: 80%;
      height: 2rem;
      background: ${({ theme }) => theme.colors.green_300};
      color: ${({ theme }) => theme.colors.text};
      border: 0;
      margin-top: 1.5rem;
      border-radius: 4px;
      padding: 0.5rem;

      font-weight: bold;
      transition: all 0.2s;

      &:hover {
        background: ${({ theme }) => theme.colors.green_400};
      }
    }
  }
`;