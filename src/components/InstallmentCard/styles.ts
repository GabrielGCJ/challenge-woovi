import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-width: 10rem;
  width: 90%;
  height: 4.375rem;
  border-radius: 10px;
  border: 2px solid #e5e5e5;
  transition: background 0.3s;
  padding: 21px;
  background: red ;

  &:has(input:checked) {
    background: rgba(3, 214, 157, 0.05);
  }

  &:has(input:checked)::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: 0;
    /* width: 100%; */
    /* height:70%; */
    border: 2px solid #03d69d;
    border-radius: inherit;
    pointer-events: none;
  }
`;

export const ContainerSingle = styled(Container)`
/* border-radius: 10px  */
`

export const ContainerFirst = styled(Container)`
  border-radius: 10px 10px 0 0;
`;

export const ContainerLast = styled(Container)`
  border-radius: 0 0 10px 10px;
  border-top: none;
  background-color:pink ;;
`;

export const ContainerList = styled(Container)`
/* border-radius: ; */
  border-top: none;
  border-radius: 0 0 ;
  /* background: pink; */
`;

export const MainCardInfo = styled.span`
  position: absolute;
  bottom: 100%;
  left: 20px;
  transform: translateY(50%);
  background-color: #e5e5e5;
  border-radius: 100px;
  padding: 0 20px;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 18px;
  color: #4d4d4d;
`;

export const Hidden = styled.span`
  display: none;
`;

export const TopSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InstallmentInfo = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #4d4d4d;
  line-height: 32.74px;

  & span {
    font-weight: 800;
  }
`;

export const BonusInfo = styled.span`
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #03d69d;
  line-height: 20px;
  margin-top: 1px;

  & strong {
    font-weight: 800;
  }
`;

export const Total = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #afafaf;
  line-height: 21.82px;

  & strong {
    font-weight: 800;
  }
`;
