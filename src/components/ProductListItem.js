'use client';

import {useState} from 'react';

import ProductImage from "./ProductImage";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductListItem({name, category, price, image, id, cartProducts, setCartProducts}) {
  const [quantity, setQuantity] = useState(0);

  function handleAddToCart() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    const product = {
      quantity: newQuantity,
      name,
      price,
    };

    const newCartProducts = {...cartProducts};
    newCartProducts[id] = product;
    setCartProducts(newCartProducts);
  }

  function handleIncreaseQuantity() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    const newCartProducts = {...cartProducts};
    newCartProducts[id]["quantity"] = newQuantity;
    setCartProducts(newCartProducts);
  }
  function handleDecreaseQuantity() {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);

    const newCartProducts = {...cartProducts};
    if (newQuantity === 0) {
      delete newCartProducts[id];
    } else {
      newCartProducts[id]["quantity"] = newQuantity;
    }

    setCartProducts(newCartProducts);
  }

  return (
    <div>
      <ProductImage image={image} alt={name} />
      <AddToCartButton
        quantity={quantity}
        onClick={handleAddToCart}
        onIncrement={handleIncreaseQuantity}
        onDecrement={handleDecreaseQuantity}
        classes="mx-auto"
      />
      <p className="text-sm text-rose-500 mb-50">{category}</p>
      <h3 className="text-base mb-50">{name}</h3>
      <p className="text-red">${price}</p>
    </div>
  )
}