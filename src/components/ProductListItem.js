'use client';

import {useState} from 'react';

import ProductImage from "./ProductImage";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductListItem({name, category, price, image}) {
  const [quantity, setQuantity] = useState(0);

  function handleAddToCart() {
    setQuantity(quantity + 1);
  }

  return (
    <div>
      <ProductImage image={image} alt={name} />
      <AddToCartButton
        quantity={quantity}
        onClick={handleAddToCart}
        onIncrement={()=> setQuantity(quantity + 1)}
        onDecrement={() => setQuantity(quantity - 1)}
        classes="mx-auto"
      />
      <p className="text-sm text-rose-500 mb-50">{category}</p>
      <h3 className="text-base mb-50">{name}</h3>
      <p className="text-red">${price}</p>
    </div>
  )
}