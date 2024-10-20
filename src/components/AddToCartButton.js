import Button from "@/components/Button";
import CartIcon from "/public/images/icon-add-to-cart.svg";
export default function AddToCartButton({children, classes}) {
  return (
    <Button classes={`${classes} flex gap-100 mb-150 -mt-300 relative z-10 hover:border-red hover:text-red transition-colors`}><CartIcon/> {children}</Button>
  );
}