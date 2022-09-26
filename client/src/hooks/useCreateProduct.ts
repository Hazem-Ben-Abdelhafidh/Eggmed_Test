import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct($name: String!, $price: Int!, $description: String) {
    createProduct(name: $name, price: $price, description: $description) {
      id
      name
      price
      description
    }
  }
`;
const useCreateProduct = () => {
  return useMutation(CREATE_PRODUCT);
};

export default useCreateProduct;
