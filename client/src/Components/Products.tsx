import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useProducts from "../hooks/useProducts"
import Product from "./Product";

const Products = () => {
    const products = useProducts();
    if (products.error) return <Typography variant="h4" color={"error"} > Error!</Typography>
    if (products.loading) return <Typography variant="h3" > Loading...</Typography>

    const displayedProducts = products.data && products.data.products.map((product) => {
        return (
            <Product key={product.id} name={product.name} id={product.id} description={product.description} price={product.price} />

        )
    }
    )

    return (
        <Box>
            <Grid container my={6} rowSpacing={2} columnSpacing={1}>
                {displayedProducts}
            </Grid>
        </Box>

    )
}

export default Products