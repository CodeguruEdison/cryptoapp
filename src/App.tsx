import React from "react";
import "./App.css";
import {Routes, Route, Link} from "react-router-dom";
import {Layout, Typography, Space} from "antd";
import {
  NavBar,
  HomePage,
  Exchanges,
  CryptoCurrencies,
  CryptoDetail,
  News,
} from "./components";
import Footer from "./components/Layout/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            {/*TODO: #2 Move this to seprate components */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetail />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default App;
