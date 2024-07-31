import {
  FirstValueContainer,
  FirstValueContainerGlobal,
  LeftContainer,
  ParcelInformationContainer,
  RigthContainer,
  SecondaryValueContainer,
} from "./styles";

import ima1 from "../../assets/elipse1.svg";
import ima2 from "../../assets/ellipse2.svg";

export const ParcelInformation = () => {
  return (
    <FirstValueContainerGlobal>

    <ParcelInformationContainer>
      <FirstValueContainer>
        <LeftContainer>
          <img src={ima1} alt="" />
          <h3>1ª entrada no Pix</h3>
        </LeftContainer>
        <RigthContainer>
          <h3>R$ 15.300,00</h3>
        </RigthContainer>
      </FirstValueContainer>

      <SecondaryValueContainer>
        <LeftContainer>
          <img src={ima2} alt="" />
          <h3>2ª no cartão</h3>
        </LeftContainer>
        <RigthContainer>
          <h3>R$ 15.300,00</h3>
        </RigthContainer>
      </SecondaryValueContainer>
    </ParcelInformationContainer>
    </FirstValueContainerGlobal>
  );
};
