import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/add.js";
import './App.scss';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import HomePage from './pages/HomePage.js';
import NEUPage from "./pages/NEUpage";
import ScrollingBar from "./header/ScrollingBar.js";
import CartPage from "./pages/CartPage.js";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
          <Header />        
        <ScrollingBar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/1" element={<NEUPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Fragment>
    </Provider>
  );
}

export default App;
