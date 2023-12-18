import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/add";
import './App.scss';
import Header from './header/header';
import Footer from './footer/footer';
import HomePage from './pages/HomePage';
import NEUPage from "./pages/NEUpage";
import ScrollingBar from "./header/ScrollingBar";
import CartPage from "./pages/CartPage";
import CoursePage from "./pages/CoursePage";

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
            <Route path="/course" element={<CoursePage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Fragment>
    </Provider>
  );
}

export default App;
