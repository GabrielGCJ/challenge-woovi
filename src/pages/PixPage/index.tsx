import qrCode from "../../assets/qr_code.svg";
import copyIcon from "../../assets/copyIcon.svg";
import {
  Installment,
  InstallmentsContainer,
  PixPageContainer,
  TermTime,
} from "./styles";

export const PixPage = () => {
  return (
    <PixPageContainer>
      <h2>João pague a entrada de R$ 15.300,00 pelo Pix</h2>
      <img className="qr" src={qrCode} alt="" />
      <button>
        Clique para copiar o QR CODE <img className="icon" src={copyIcon}></img>
      </button>
      <TermTime>
        <h3 className="term">Prazo de pagamento:</h3>
        <h3 className="date">15/12/2021 - 8:17</h3>
      </TermTime>
      <InstallmentsContainer>
        <Installment>
          <h4>1 Entrada no pix</h4>
          <h4> R$ 15.300</h4>
        </Installment>
        <Installment>
          <h4>2 no cartão</h4>
          <h4> R$ 15.300</h4>
        </Installment>
      </InstallmentsContainer>
    </PixPageContainer>
  );
};
