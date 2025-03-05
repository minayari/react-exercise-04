import { Outlet } from "react-router-dom";
import Header from "../components/Haeder";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
