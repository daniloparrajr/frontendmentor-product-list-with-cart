'use client';

import ProductImage from "./ProductImage";
import AddToCartButton from "@/components/AddToCartButton";
import {formatCurrency} from "@/utils/format";

export default function ProductListItem({name, category, price, image, id, cartProducts, setCartProducts}) {
  function handleAddToCart() {
    const product = {
      quantity: 1,
      name,
      price,
      thumbnail: image.thumbnail,
    };

    const newCartProducts = {...cartProducts};
    newCartProducts[id] = product;
    setCartProducts(newCartProducts);
  }

  function handleIncreaseQuantity() {
    const newCartProducts = {...cartProducts};
    newCartProducts[id]["quantity"] = newCartProducts[id]["quantity"] + 1;
    setCartProducts(newCartProducts);
  }
  function handleDecreaseQuantity() {
    const newCartProducts = {...cartProducts};
    const newQuantity = newCartProducts[id]["quantity"] - 1;

    if (newQuantity === 0) {
      delete newCartProducts[id];
    } else {
      newCartProducts[id].quantity = newQuantity;
    }

    setCartProducts(newCartProducts);
  }

  let productIsActive = false;

  if (cartProducts[id]) {
    productIsActive = true;
  }

  return (
    <div>
      <ProductImage classes={productIsActive ? 'border-red' : 'border-rose-50'} image={image} alt={name} />
      <AddToCartButton
        quantity={cartProducts[id]?.quantity}
        onClick={handleAddToCart}
        onIncrement={handleIncreaseQuantity}
        onDecrement={handleDecreaseQuantity}
        classes="mx-auto"
      />
      <p className="text-sm text-rose-500 mb-50">{category}</p>
      <h3 className="text-base mb-50">{name}</h3>
      <p className="text-red font-semibold">${formatCurrency(price)}</p>
    </div>
  )
}