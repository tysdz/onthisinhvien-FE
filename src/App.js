import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/add.tsx";
import './App.scss';
import Header from './header/header.tsx';
import Footer from './footer/footer.tsx';
import HomePage from './pages/HomePage.tsx';
import NEUPage from "./pages/NEUpage.tsx";
import ScrollingBar from "./header/ScrollingBar.tsx";
import CartPage from "./pages/CartPage.tsx";

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
