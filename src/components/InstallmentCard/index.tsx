import React, { InputHTMLAttributes, useMemo } from "react";
import { Container, ContainerFirst, ContainerLast, ContainerList, MainCardInfo, Hidden, TopSide, InstallmentInfo, BonusInfo, Total, ContainerSingle } from "./styles"; // importar os estilos

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

interface InstallmentCardProps extends InputHTMLAttributes<HTMLInputElement> {
  installmentQuantity: number;
  installmentValue: number;
  mainTitle?: string;
  mockDataNun?: number;
  index?: number;
  totalItems?: number;
}

export const InstallmentCard: React.FC<InstallmentCardProps> = ({
  mainTitle,
  installmentQuantity,
  installmentValue,
  index,
  totalItems,
  ...rest
}) => {
  const formatedQuantity = useMemo(() => {
    return currencyFormatter.format(installmentValue);
  }, [installmentValue]);

  const formatedTotal = useMemo(() => {
    const total = installmentValue * installmentQuantity;
    return currencyFormatter.format(total);
  }, [installmentQuantity, installmentValue]);

  const handleContainer = (index: number, totalItems: number) => {
    if (!index) return Container;
    if (index === 1) return ContainerSingle;
    if (index === 2) return ContainerFirst;
    if (index === totalItems ) return ContainerLast; // Último item
    return ContainerList;
  };

  const ContainerComponent = handleContainer(index || 0, totalItems || 0);

  return (
    <ContainerComponent>
      <label>
        <MainCardInfo className={mainTitle ? '' : Hidden}>
          {mainTitle}
        </MainCardInfo>
        <TopSide>
          <InstallmentInfo>
            <span>{installmentQuantity}x </span> {formatedQuantity}
          </InstallmentInfo>
          <input type="radio" {...rest} />
        </TopSide>
        {installmentQuantity === 1 ? (
          <BonusInfo>
            Ganhe <strong>3%</strong> de Cashback
          </BonusInfo>
        ) : (
          <Total>Total: {formatedTotal}</Total>
        )}
      </label>
    </ContainerComponent>
  );
};
