import Button from "@/components/Button";
import CartIcon from "/public/images/icon-add-to-cart.svg";
import DecrementQuantityIcon from "/public/images/icon-decrement-quantity.svg";
import IncrementQuantityIcon from "/public/images/icon-increment-quantity.svg";

export default function AddToCartButton({classes, onClick, onDecrement, onIncrement, quantity}) {
  let buttonCommonClasses = `${classes} mb-150 -mt-300 relative z-10 transition-colors`;
  let buttonActiveClasses = `${buttonCommonClasses} max-w-[160px] w-full bg-red text-white border-red mx-auto flex items-center justify-between font-semibold p-150 rounded-full border`;
  let buttonDefaultClasses = `${buttonCommonClasses} gap-100 bg-white hover:border-red hover:text-red`;
  return (
    <>
      {quantity > 0
        ? (
          <div
            className={`${buttonActiveClasses}`}>
            <button
              className="border border-white flex items-center justify-center rounded-full bg-transparent w-[20px] h-[20px]"
              onClick={onDecrement}>
              <DecrementQuantityIcon/>
              <span className="sr-only">Decrease product quantity</span>
            </button>
            {quantity}
            <button
              className="border border-white flex items-center justify-center rounded-full bg-transparent w-[20px] h-[20px]"
              onClick={onIncrement}>
              <IncrementQuantityIcon/>
              <span className="sr-only">Add product quantity</span>
            </button>
          </div>

        )
        : <Button onClick={onClick} classes={buttonDefaultClasses}><CartIcon/> Add to Cart</Button>
      }
    </>

  );
}