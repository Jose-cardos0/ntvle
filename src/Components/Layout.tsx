import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import ScrollToTop from "../Components/ScrollTools";

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
}
