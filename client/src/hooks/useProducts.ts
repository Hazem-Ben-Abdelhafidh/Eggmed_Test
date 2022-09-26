import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
  query Query {
    products {
      id
      name
      price
      description
    }
  }
`;

export interface Product {
  __typename: "Product";
  id: string;
  name: string;
  price: number;
  description: string;
}
interface Products {
  products: Product[];
}
const useProducts = () => {
  return useQuery<Products, void>(GET_PRODUCTS);
};

export default useProducts;
