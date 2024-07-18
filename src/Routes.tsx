import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
// import { PaymentMetod } from "./pages/PaymentMetodPage";
// import { PixInInstallmentsPage } from "./pages/PixInInstallmentsPage";
import { PixPage } from "./pages/PixPage";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* <Route path="/" element={<PaymentMetod />} /> */}
        {/* <Route path="/" element={<PixInInstallmentsPage />} /> */}
        <Route path="/" element={<PixPage/>} />
      </Route>
    </Routes>
  );
}
