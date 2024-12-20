import EmptyCartImage from "/public/images/illustration-empty-cart.svg";
import RemoveItemIcon from "/public/images/icon-remove-item.svg";
import CarbonNeutralIcon from "/public/images/icon-carbon-neutral.svg";
import {formatCurrency} from "@/utils/format";
import Button from "@/components/Button";

export default function Cart({products, setCartProducts, setModalOpen}) {
  const productsCount = Object.keys(products).length;

  function removeCartItem(productId) {
    const newCartProducts = {...products};
    delete newCartProducts[productId];
    setCartProducts(newCartProducts);
  }

  const total = Object.keys(products).reduce((total, key) => total + (products[key].quantity * products[key].price), 0);

  return (
    <div className="bg-white p-300 rounded-xl">
      <h2 className="text-red text-lg font-bold mb-300">Your Cart ({productsCount})</h2>

      {productsCount === 0 && (
        <div className="flex flex-col items-center gap-200 p-200">
          <EmptyCartImage/>
          <p className="text-sm font-semibold text-rose-500">Your added items will appear here</p>
        </div>
      )}

      {productsCount >= 1 && (
        <div className="flex flex-col gap-300">
          <ul className="flex flex-col gap-200">
            {Object.keys(products).map((productId) => (
              <li key={productId} className="pb-200 border-b border-rose-100 flex items-center justify-between">
                <div className="flex flex-col gap-100">
                  <p className="text-rose-900 font-semibold">{products[productId].name}</p>
                  <div className="flex gap-100 items-end">
                    <p className="text-red font-semibold">{products[productId].quantity}x</p>
                    <p className="text-sm text-rose-500">@ ${formatCurrency(products[productId].price)}</p>
                    <p
                      className="text-sm text-rose-500 font-semibold">${formatCurrency(products[productId].price * products[productId].quantity)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeCartItem(productId)}
                  className="hover:text-rose-900 hover:border-rose-900 text-rose-400 transition-colors border border-rose-400 rounded-full w-[20px] h-[20px] flex items-center justify-center"
                >
                  <RemoveItemIcon/>
                  <span className="sr-only">Remove product on cart</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between">
            <p className="text-sm text-rose-900">Order Total</p>
            <p className="text-lg font-bold">${formatCurrency(total)}</p>
          </div>
          <p className="flex justify-center gap-100 text-sm bg-rose-50 p-200 rounded-lg">
            <CarbonNeutralIcon />
            <span>This is a <strong className="font-semibold">carbon-neutral</strong> delivery</span>
          </p>
          <Button onClick={() => setModalOpen(true)} type="primary">Confirm Order</Button>
        </div>
      )}
    </div>
  );
}