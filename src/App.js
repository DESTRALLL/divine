import React, {useEffect, useState} from "react";
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
    const products = [
        {
            id: 1,
            name: '"GANG OR BANG" CRYSTAL',
            image: "1.jpg",
            price: 2590
        },
        {
            id: 2,
            name: '"PUFFY BEAR" BLACK T-SHIRT',
            image: "2.jpg",
            price: 2190
        },
        {
            id: 3,
            name: '"PUFFY BEAR" WHITE T-SHIRT',
            image: "3.jpg",
            price: 2190
        },
        {
            id: 4,
            name: 'REFLECTION STAR T-SHIRT',
            image: "4.jpg",
            price: 2200
        },
        {
            id: 5,
            name: 'Hoodie "BLACK CUTS"',
            image: "5.jpg",
            price: 4890
        },
        {
            id: 6,
            name: 'BLESSED MONOGRAM JACKET',
            image: "6.jpg",
            price: 7990
        },
        {
            id: 7,
            name: '"IN LOVE" Zip-Hoodie',
            image: "7.jpg",
            price: 5490
        },
        {
            id: 8,
            name: '"SILK HOES" GRAY ZIP-HOODIE',
            image: "8.jpg",
            price: 4890
        },
        {
            id: 9,
            name: 'BUTTONS BUNNY ZIP B&W',
            image: "9.jpg",
            price: 7200
        },
        {
            id: 10,
            name: 'BUTTONS BUNNY ZIP PAINTED',
            image: "10.jpg",
            price: 7200
        },
        {
            id: 11,
            name: 'BUNNY ZIP HOODIE WHITE',
            image: "11.jpg",
            price: 7200
        },
        {
            id: 12,
            name: 'BUTTONS BUNNY ZIP PLATINA',
            image: "12.jpg",
            price: 5590
        },
        {
            id: 13,
            name: 'BLESSED SWEATER "MONOGRAM"',
            image: "13.jpg",
            price: 4290
        },
        {
            id: 14,
            name: '"DOTTED BEAR" BLACK SWEATER',
            image: "14.jpg",
            price: 4990
        },
        {
            id: 15,
            name: '"CLOUDS BOYS" SWEATER (GOLD)',
            image: "15.jpg",
            price: 4190
        },
        {
            id: 16,
            name: '"MERCY" CARGO PANTS',
            image: "16.jpg",
            price: 4890
        },
        {
            id: 17,
            name: '"GHOST CROSS" PANTS',
            image: "17.jpg",
            price: 3990
        },
        {
            id: 18,
            name: 'BLESSED PANTS «HEART» GREY',
            image: "18.jpg",
            price: 3990
        }
    ]

    const [basket, setBasket] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    function addItem(product, size) {
        const id = product.id;
        let item = basket[id + size];

        if(item === undefined) {
            item = {...product};
            item.size = size;
            item.amount = 0;
            item.count = 0;
        }

        item.amount++;
        item.cost = item.price * item.amount;

        const newBasket = {...basket, [id + size]: item};

        setBasket(newBasket);
        localStorage.setItem("basket", JSON.stringify(newBasket));
    }

    function removeItem(product, size) {
        const id = product.id;
        let item = basket[id + size];

        if(item === undefined) return;

        if(item.amount === 1) {
            const newBasket = {...basket};
            delete newBasket[item.id + size];
            setBasket(newBasket);
            localStorage.setItem("basket", JSON.stringify(newBasket));
            return;
        }

        item.amount--;
        item.cost = item.price * item.amount;
        const newBasket = {...basket, [id + size]: item};
        setBasket(newBasket);
        localStorage.setItem("basket", JSON.stringify(newBasket));
    }

    function deleteItem(product, size) {
        const id = product.id;
        let item = basket[id + size];

        if(item === undefined) return;

        const newBasket = {...basket};
        delete newBasket[item.id + size];
        setBasket(newBasket);
        localStorage.setItem("basket", JSON.stringify(newBasket));
    }

    useEffect(() => {
        if(localStorage.getItem("basket")) {
            const basket = JSON.parse(localStorage.getItem("basket"));

            setBasket(basket);
        }
    }, []);

  return (
    <HashRouter>
        <div className="wrapper">
            <Navigation control={{open: isOpen, setOpen: setIsOpen}} basket={basket} add={addItem} remove={removeItem} deleteItem={deleteItem}/>

            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/catalog" element={<CatalogPage products={products} open={setIsOpen} add={addItem}/>}/>
                <Route path="/delivery" element={<DeliveryPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/basket" element={<BasketPage basket={basket}/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>

            <Footer/>
        </div>
    </HashRouter>
  );
}

export default App;
