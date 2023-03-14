import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  font-size: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid gray;
  border-radius: 8px;
  width: 40rem;

  @media (max-width: 720px) {
    width: 25rem;
    
    }

`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //height: 30rem;

  overflow: hidden;

  border-radius: 8px;
`;
export const HightLights = styled.div`
  display: flex;
  justify-content: space-between;

 // padding: 0 1rem 0 1rem;
  line-height: 1.5rem;

  margin-top: -3.5rem;

  background: rgba(104, 100, 102, 0.4)
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-left: 1rem;
  //color: ${({ theme }) => theme.colors.secondary};
`;
export const Price = styled.div`
  padding: 0.5rem;
  line-height: 1.25rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.green_500};
`;

export const Description = styled.div`

background: ${({ theme }) => theme.colors.background};

padding: 1rem;

border-radius: 8px;

  strong {
    background: ${({ theme }) => theme.colors.green_300};
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border-radius: 2px;
  }
`;

export const Line = styled.div`
  width: 90%;
  height: 1px;
  background: ${({ theme }) => theme.colors.secondary};

  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  a {
    border: 0;
  border-radius: 2px;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.button};
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  span {
    font-weight: bold;
    margin-left: 0.25rem;

    cursor: pointer;

    &:hover {
      color:  ${({ theme }) => theme.colors.green_500};
    }

    
  }
`;

export const Button = styled.button`
  border: 0;
  background: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.text};

  padding: 0.5rem 1.25rem 0.5rem 1.25rem;
  margin-top: 1.25rem;
  cursor: pointer;
`;