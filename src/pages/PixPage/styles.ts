import styled from "styled-components";

export const PixPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 5rem;
  font-family: "Nunito", sans-serif;

  h2 {
    font-size: 24px;
    color: #4d4d4d;
  }

  .qr {
    border: 2px solid rgb(3, 214, 157);
    padding: 0.4rem;
    border-radius: 3%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(19, 58, 111);
    border: none;
    border-radius: 10px;
    font-family: "Nunito", sans-serif;
    font-size: 20px;
    color: #4d4d4d;
    min-width: 14 2563225rem;
    /* min-width: 200px ; */

    .icon {
      width: 1.5rem;

      padding-left: 0.5rem;
    }
  }
`;

export const TermTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  .term {
    color: rgb(117, 117, 117);
  }
  .date {
    color: white;
  }
`;

export const InstallmentsContainer = styled.div`
  border-bottom: 2px solid black;
`;

export const Installment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  max-width: 30rem;
  min-width: 20rem;
`;
