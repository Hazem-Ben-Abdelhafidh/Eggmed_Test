import { Document, model, Schema } from "mongoose";

export interface IProduct extends Document {
  _doc: any;
  name: string;
  price: number;
  description: string;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

const Product = model<IProduct>("Product", productSchema);

export default Product;
