import ProductList from "@/components/ProductList";

import products from "./data.json";

export default function Home() {
  return (
    <main role="main" className="max-w-9000 mx-auto py-1100">
      <h1 className="sr-only">Frontend Mentor | Product list with cart</h1>
      <h2 className="font-bold text-xl mb-400">Desserts</h2>

      <div>
        <ProductList products={products} />
      </div>

    </main>
  );
}
