import { Typography } from "@mui/material"
import useProducts from "../hooks/useProducts"
import Products from "./Products";
import Wrapper from "./Wrapper";


const Home = () => {
    const products = useProducts();
    console.log(products.data)
    return (
        <Wrapper>
            <Typography variant="h3" component={"h1"}>All Products</Typography>
            <Products />

        </Wrapper>
    )
}

export default Home