import styled from "styled-components";

export const PixInInstallmentsPageContainerGlobal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  `;

export const PixInInstallmentsPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 25rem;
  /* max-width:  28.125rem; */

  h2 {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 24px;
    color: #4d4d4d;
    text-align: center;
    padding-bottom: 1rem;
  }

  div {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 95%;
  }
`;

export const NameCpfNumberCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 95%;
`;

export const ExpirationAndCVV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  max-width: 87%;
  gap: 1rem;

  div {
    display: flex;
    width: 100%;
    
  }
`;

export const ButtonSubmit = styled.div`
  button {
    font: Nunito;
    width: 100%;
    max-width: 92%;
    border-radius: 8px;
    font-size: 18px;
    background:#133A6F ;
  }
`;