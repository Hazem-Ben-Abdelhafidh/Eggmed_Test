import { gql, useQuery } from "@apollo/client";
import { Product } from "./useProducts";

const GET_PRODUCTS = gql`
  query Query($id: ID!) {
    product(id: $id) {
      id
      name
      price
      description
    }
  }
`;
interface ProductDetails {
  product: Product;
}
const useProduct = (id: string) => {
  return useQuery<ProductDetails>(GET_PRODUCTS, {
    variables: { id },
  });
};

export default useProduct;
