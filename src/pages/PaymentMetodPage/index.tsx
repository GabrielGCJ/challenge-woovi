import React from "react";
import { PaymentMetodContainer, PaymentMetodContainerGlobal } from "./styles";
import { InstallmentCard } from "../../components/InstallmentCard";

const mockData = [
  {
    installmentQuantity: 1,
    installmentValue: 3025000,
    mainTitle: "Pix",
    // benefitText: "Benefit 1",
    index: 1,
    totalItems: 3,
  },
  {
    installmentQuantity: 2,
    installmentValue: 1530000,
    mainTitle: "Pix Parcelado",
    // benefitText: "Benefit 2",
    index: 2,
    totalItems: 3,
  },
  {
    installmentQuantity: 3,
    installmentValue: 1019666,
    // benefitText: "Benefit 3",
    index: 3,
    totalItems: 4,
  },
  {
    installmentQuantity: 4,
    installmentValue: 772500,
    // benefitText: "Benefit 4",
    index: 4,
    totalItems: 5,
  },
  {
    installmentQuantity: 5,
    installmentValue: 630000,
    // benefitText: "Benefit 5",
    index: 5,
    totalItems: 6,
  },
  {
    installmentQuantity: 6,
    installmentValue: 528333,
    // benefitText: "Benefit 6",
    index: 5,
    totalItems: 6,
  },
  {
    installmentQuantity: 7,
    installmentValue: 454285,
    // benefitText: "Benefit 3",
    index: 5,
    totalItems: 6,
  },
];

export function PaymentMetod() {
  return (
    <PaymentMetodContainerGlobal>

    <PaymentMetodContainer>
      <h2>Fulano, como você quer pagar?</h2>
      <form>
        <section>
          {mockData.length > 0 && <InstallmentCard key={0} mockDataNun={mockData.length}  {...mockData[0]} />}
        </section>

        <section>
          {mockData.slice(1).map((data, i) => (
            <InstallmentCard key={i + 1} {...data} />
          ))}
        </section>
      </form>
    </PaymentMetodContainer>
          </PaymentMetodContainerGlobal>
  );
}
