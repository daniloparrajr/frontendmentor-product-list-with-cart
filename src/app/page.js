'use client';

import ProductList from "@/components/ProductList";
import Cart from "@/components/Cart";
import products from "./data.json";
import {useState} from "react";

export default function Home() {
  const [cartProducts, setCartProducts] = useState({});

  return (
    <div className="grid xl:grid-cols-content-sidebar gap-400 max-w-9000 mx-auto py-1100 px-500 xl:px-0">
      <main role="main">
        <h1 className="sr-only">Frontend Mentor | Product list with cart</h1>
        <h2 className="font-bold text-xl mb-400">Desserts</h2>
        <ProductList
          products={products}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      </main>
      <aside>
        <Cart products={cartProducts}/>
      </aside>
    </div>
  );
}
