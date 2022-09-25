import Product, { IProduct } from "./models/productModel";
interface ProductInput {
  productInput: IProduct;
  id: string;
}
export const resolvers = {
  Query: {
    // Get all products
    products: async () => {
      const products = await Product.find();
      return products;
    },
  },
  Mutation: {
    // Create product
    createProduct: async (_: any, args: ProductInput) => {
      const product = await Product.create({
        name: args.productInput.name,
        price: args.productInput.price,
        description: args.productInput.description,
      });
      return {
        id: product.id,
        ...product?._doc,
      };
    },
    // Delete product
    deleteProduct: async (_: any, args: ProductInput) => {
      const wasDeleted = (await Product.deleteOne({ _id: args.id }))
        .deletedCount;
      return wasDeleted;
    },
    // Update product
    updateProduct: async (_: any, args: ProductInput) => {
      console.log(args.id);
      console.log(args.productInput);
      const updatedProduct = await Product.findByIdAndUpdate(args.id, {
        ...args.productInput,
      });
      return {
        id: updatedProduct?.id,
        ...updatedProduct?._doc,
      };
    },
  },
};
