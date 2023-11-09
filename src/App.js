import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/add.js";
import './App.css';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import HomePage from './pages/HomePage.js';
import NEUPage from "./pages/NEUpage";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
