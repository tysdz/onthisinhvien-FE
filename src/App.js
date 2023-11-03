import React, { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import HomePage from './pages/HomePage.js';
import NEUPage from "./pages/NEUpage";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      <Header count={count} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NEU" element={<NEUPage increaseCount={increaseCount} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
