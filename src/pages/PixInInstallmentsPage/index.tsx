import { Button } from "@mui/material";
import {
  ButtonSubmit,
  ExpirationAndCVV,
  NameCpfNumberCardContainer,
  PixInInstallmentsPageContainer,
  PixInInstallmentsPageContainerGlobal,
} from "./styles";
import TextField from "@mui/material/TextField";
export const PixInInstallmentsPage = () => {
  return (
    <PixInInstallmentsPageContainerGlobal>

    <PixInInstallmentsPageContainer>
      <h2>João, pague o restante em 1x no cartão</h2>
      <NameCpfNumberCardContainer>
        <TextField
          required
          id="outlined-required"
          label="Nome completo"
          defaultValue="Hello World2"
          />

        <TextField
          required
          id="outlined-required"
          label="CPF"
          defaultValue="Hello World2"
          />
        <TextField
          required
          id="outlined-required"
          label="Numero de Cartão"
          defaultValue="Hello World2"
          />

      </NameCpfNumberCardContainer>
      <ExpirationAndCVV>

      <TextField
      required
      id="outlined-required"
      label="Vencimento"
      defaultValue="Hello World2"
      />
        <TextField
          required
          id="outlined-required"
          label="CVV"
          defaultValue="Hello World2"
          />
      </ExpirationAndCVV>
      <ButtonSubmit>
      <Button sx={{ textTransform: 'none' }} variant="contained">Pagar</Button>
      </ButtonSubmit>
    </PixInInstallmentsPageContainer>
          </PixInInstallmentsPageContainerGlobal>
  );
};
