import { gql, useMutation } from "@apollo/client";
import { LoadingButton } from "@mui/lab";
import { Button, Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom"
import useProduct from "../hooks/useProduct";
import { Product } from "../hooks/useProducts";
const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: ID!
    $name: String
    $price: Int
    $description: String
  ) {
    updateProduct(
      id: $id
      name: $name
      price: $price
      description: $description
    ) {
      id
      name
      description
      price
    }
  }
`;
interface ProductDetails {
    product: Product;
}
const EditProduct = () => {

    const { id } = useParams();
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("");
    const product = useProduct(id as string);

    const [updateProduct, { data, loading, error }] = useMutation<ProductDetails>(UPDATE_PRODUCT)
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(name, price, description)
        updateProduct({
            variables: {
                id: id,
                name: name,
                price: Number(price),
                description: description
            }
        });

    }
    if (product.loading) return <div>loading...</div>
    if (product.error) return <div>error!</div>
    return (
        <form onSubmit={submitHandler} style={{ padding: "5px" }}>
            <Typography variant="h2">Update the product</Typography>
            <Stack spacing={2} direction="column">
                <TextField label="Product Name" defaultValue={product.data?.product.name} onChange={(e) => setName(e.target.value)} />
                <TextField label="Price" defaultValue={product.data?.product.price} onChange={(e) => setPrice(e.target.value)} />
                <TextareaAutosize placeholder="Description..." minRows={10} defaultValue={product.data?.product.description} onChange={(e) => setDescription(e.target.value)} />
                <Stack direction="column" spacing={2}>
                    <LoadingButton variant="contained" loading={loading} size="large" type="submit">Update Product</LoadingButton>
                    {data && <Typography variant="body1" color="primary">Edited</Typography>}
                </Stack>
            </Stack>
        </form>
    )
}


export default EditProduct