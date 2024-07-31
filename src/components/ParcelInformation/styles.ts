import styled from "styled-components";

export const FirstValueContainerGlobal = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: red;
`;

export const ParcelInformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: black;

  width: 100%;
`;

const ValueContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  
`;

export const FirstValueContainer = styled(ValueContainers)``;

export const SecondaryValueContainer = styled(ValueContainers)``;

export const LeftContainer = styled.div``;

export const RigthContainer = styled.div``;
