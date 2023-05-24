import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";

import Navigation from "./ui/Navigation";

import MainPage from "./pages/main/MainPage";
import NotFoundPage from "./pages/errors/NotFoundPage";
import Footer from "./ui/Footer";
import CatalogPage from "./pages/catalog/CatalogPage";
import DeliveryPage from "./pages/custom/DeliveryPage";
import ContactPage from "./pages/custom/ContactPage";
import BasketPage from "./pages/basket/BasketPage";

function App() {
  return (
    <HashRouter>
        <div className="wrapper">
            <Navigation/>

            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/catalog" element={<CatalogPage/>}/>
                <Route path="/delivery" element={<DeliveryPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/basket" element={<BasketPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>

            <Footer/>
        </div>
    </HashRouter>
  );
}

export default App;
