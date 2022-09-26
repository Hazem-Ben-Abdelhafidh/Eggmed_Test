import { Typography } from "@mui/material"
import useProducts from "../hooks/useProducts"
import Products from "./Products";


const Home = () => {
    const products = useProducts();
    console.log(products.data)
    return (
        <div>
            <Typography variant="h3" component={"h1"}>All Products</Typography>
            <Products />

        </div>
    )
}

export default Home