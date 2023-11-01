import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import HomePage from './pages/HomePage.js';
import NEUPage from "./pages/NEUpage";

function App() {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NEU" element={<NEUPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
