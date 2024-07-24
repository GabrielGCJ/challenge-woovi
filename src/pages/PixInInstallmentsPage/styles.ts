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
  max-width: 28.125rem;
  /* background-color: red; */

  h2 {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 24px;
    color: #4d4d4d;
    text-align: center;
    padding-bottom: 2rem;
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
