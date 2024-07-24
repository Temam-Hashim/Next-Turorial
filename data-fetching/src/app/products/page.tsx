"use client";
// import { useQuery } from "@tanstack/react-query";


type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
};

async function Products() {
    const response = await fetch("http://localhost:3001/products");
    const products = await response.json();
//   const {
//     data: products,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ["products"],
//     queryFn: getProducts,
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }

  return (
    <ul className="space-y-4 p-4">
      {products?.map((product: ProductType) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">Price: ${product.price}</p>
        </li>
      ))}
    </ul>
  );
}

export default Products;
