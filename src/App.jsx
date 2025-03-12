import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import Layout from "./pages/Layout";
import Cart from "./pages/Cart";

export const dataContext = createContext(null);

function App() {
  const [allData, setAllData] = useState(
    JSON.parse(localStorage.getItem("allData")) || []
  );
  return (
    <>
      <dataContext.Provider value={{ allData, setAllData }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/product" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </dataContext.Provider>
    </>
  );
}

export default App;
