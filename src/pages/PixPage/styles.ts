import styled from "styled-components";

export const PixPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  font-family: "Nunito", sans-serif;

  h2 {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 24px;
    color: #4d4d4d;
    max-width: 300px;
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
    font-size: 18px;
    color: #FFFFFF;
    min-width: 14 2563225rem;
    padding: 0.5rem 1.5rem;
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
    color: #b2b2b2;
  }
  .date {
    color: #4d4d4d;
  }
`;

export const InstallmentsContainer = styled.div`
  border-bottom: 2px solid rgb(229, 229, 229);
  padding-bottom: 1rem;
`;

export const Installment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 30rem;
  min-width: 20rem;
`;

export const TotalPayment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 30rem;
  min-width: 20rem;
  border-bottom: 2px solid rgb(229, 229, 229);
  padding-bottom: 1rem;
`;

export const MoreOptions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  max-width: 30rem;
  min-width: 20rem;
  border-bottom: 2px solid rgb(229, 229, 229);
  padding-bottom: 1rem;
`;

export const IdentifierContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 30rem;
  min-width: 20rem;
  font-size:14px ;

  .identifier {
    color: rgb(178, 178, 178);
  }

  .identifierNum {
    color: rgb(77, 77, 77);
  }
`;
