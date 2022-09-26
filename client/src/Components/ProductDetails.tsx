import { LoadingButton } from "@mui/lab";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useParams } from "react-router-dom"
import useDeleteProduct from "../hooks/useDeleteProduct";
import useProduct from "../hooks/useProduct";

const ProductDetails = () => {
    const { id } = useParams();
    const product = useProduct(id as string);
    const [deleteProduct, { data, loading, error }] = useDeleteProduct(id as string);
    const deleteHandler = () => {
        deleteProduct();
    }
    if (product.error) return <div>Error...</div>
    if (product.loading) return <div>Loading...</div>
    return (
        <Box>
            <Typography variant="h2" component="h1">{product.data?.product.name}</Typography>
            <Typography variant="body1">{product.data?.product?.description}</Typography>
            <Typography variant="h6" component="h2">Price: {product.data?.product?.price}</Typography>
            <Stack spacing={2} direction="row" >
                <Button component={Link} to="/edit" variant="contained">Edit</Button>
                <Stack spacing={3} direction="row">
                    <LoadingButton onClick={deleteHandler} loading={loading} variant="outlined">Delete</LoadingButton>
                    {data && <Typography variant="h6" color="primary">Deleted!</Typography>}
                </Stack>

            </Stack>
        </Box>
    )
}

export default ProductDetails