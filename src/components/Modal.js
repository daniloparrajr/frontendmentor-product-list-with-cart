import {formatCurrency} from "@/utils/format";
import Image from "next/image";

import OrderConfirmedIcon from "/public/images/icon-order-confirmed.svg";

export default function Modal({ products, setModalOpen, setCartProducts }) {
  const total = Object.keys(products).reduce((total, key) => total + (products[key].quantity * products[key].price), 0);

  function handleNewOrder() {
    setModalOpen(false);
    setCartProducts({});
  }

  function handleModalOverlayClick(e) {
    if (e.target.dataset.modalOverlay) {
      e.stopPropagation();
      setModalOpen(false);
    }
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div  className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div onClick={handleModalOverlayClick} data-modal-overlay="true" className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white p-400">
              <OrderConfirmedIcon className="mb-300" />
              <h2 className="font-bold text-xl mb-100">Order Confirmed</h2>
              <p className="text-rose-500 mb-400">We hope you enjoy your food!</p>
              <div className="bg-rose-50 p-300 rounded-lg mb-400">
                <ul className="flex flex-col gap-200 mb-300">
                  {Object.keys(products).map((productId) => (
                    <li key={productId} className="pb-200 border-b border-rose-100 flex items-center justify-between">
                      <div className="flex gap-200 items-start">
                        <Image
                          src={products[productId].thumbnail}
                          width={48}
                          height={48}
                          className="rounded"
                          alt={products[productId].name}
                        />
                        <div className="flex flex-col gap-100">
                          <p className="font-semibold">{products[productId].name}</p>
                          <div className="flex gap-100 items-end">
                            <p className="text-red font-semibold">{products[productId].quantity}x</p>
                            <p className="text-sm text-rose-500">@ ${formatCurrency(products[productId].price)}</p>
                          </div>
                        </div>
                      </div>
                      <p
                        className="font-semibold">
                        ${formatCurrency(products[productId].price * products[productId].quantity)}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-rose-900">Order Total</p>
                  <p className="text-lg font-bold">${formatCurrency(total)}</p>
                </div>
              </div>
              <button className="text-white bg-red rounded-full font-semibold p-200 w-full" onClick={handleNewOrder}>Start New Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}