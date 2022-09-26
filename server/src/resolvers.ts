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
    // Get One product
    product: async (_: any, args: Omit<ProductInput, "productInput">) => {
      const product = await Product.findById(args.id);
      if (!product) {
        throw new Error("not found");
      }
      return {
        id: product?.id,
        ...product?._doc,
      };
    },
  },
  Mutation: {
    // Create product
    createProduct: async (_: any, args: IProduct) => {
      console.log(args);
      const product = await Product.create({
        name: args.name,
        price: args.price,
        description: args.description,
      });
      console.log(product);
      return {
        id: product.id,
        ...product?._doc,
      };
    },
    // Delete product
    deleteProduct: async (_: any, args: Omit<ProductInput, "productInput">) => {
      const wasDeleted = (await Product.deleteOne({ _id: args.id }))
        .deletedCount;
      return wasDeleted;
    },
    // Update product
    updateProduct: async (_: any, args: ProductInput) => {
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
