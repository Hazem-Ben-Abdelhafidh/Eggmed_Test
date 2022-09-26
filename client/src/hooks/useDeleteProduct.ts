import { gql, useMutation } from "@apollo/client";

const DELETE_PRODUCT = gql`
  mutation Mutation($id: ID!) {
    deleteProduct(id: $id)
  }
`;
const useDeleteProduct = (id: string) => {
  return useMutation<Boolean>(DELETE_PRODUCT, {
    variables: { id },
  });
};

export default useDeleteProduct;
