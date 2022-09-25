import Product, { IProduct } from "./models/productModel";

export const resolvers = {
  Query: {},
  Mutation: {
    createProduct: async (
      _: any,
      { productInput }: { productInput: IProduct }
    ) => {
      const product = await Product.create({
        name: productInput.name,
        price: productInput.price,
        description: productInput.description,
      });
      return {
        id: product.id,
        ...product,
      };
    },
    deleteProduct: async (_: any) => {},
  },
};
