import { Button, Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
type Props = {
    id: string
    name: string;
    price: number;
    description: string
}

const Product = (props: Props) => {
    return (
        <Grid item xs={6}>
            <Card >
                <CardContent>
                    <Typography variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="h5">
                        {props.price}
                    </Typography>
                    <Typography variant="body1">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button component={RouterLink} variant="contained" to={`/${props.id}`}>See More</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product