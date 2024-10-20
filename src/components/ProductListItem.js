
import ProductImage from "./ProductImage";
import AddToCartButton from "@/components/AddToCartButton";
export default function ProductListItem({name, category, price, image}) {
  return (
    <div>
      <ProductImage image={image} alt={name} />
      <AddToCartButton classes="mx-auto">Add to Cart</AddToCartButton>
      <p className="text-sm text-rose-500 mb-50">{category}</p>
      <h3 className="text-base mb-50">{name}</h3>
      <p className="text-red">${price}</p>
    </div>
  )
}