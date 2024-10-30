import ProductListItem from './ProductListItem';

export default function ProductList({products = [], cartProducts, setCartProducts}) {
  return (
    <>
      {products.length > 0 && (
        <ul className="grid gap-x-300 gap-y-300 md:gap-y-400 sm:grid-cols-2 md:grid-cols-3">
          {products.map(product => (
            <li key={product.id}>
              <ProductListItem
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
                setCartProducts={setCartProducts}
                cartProducts={cartProducts}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}