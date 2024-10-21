import EmptyCartImage from "/public/images/illustration-empty-cart.svg";

export default function Cart() {
  const cartItems = 0;
  return (
    <div className="bg-white p-300 rounded-xl">
      <h2 className="text-red text-lg font-bold mb-300">Your Cart (0)</h2>
      {cartItems === 0 && (
        <div className="flex flex-col items-center gap-200 p-200">
          <EmptyCartImage/>
          <p className="text-sm font-semibold text-rose-500">Your added items will appear here</p>
        </div>
      )}
    </div>
  );
}