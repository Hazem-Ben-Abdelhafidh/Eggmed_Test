import { AppBar, Button, ButtonGroup, Link, Toolbar } from "@mui/material"
import { Stack } from "@mui/system"
import { Link as RouterLink } from "react-router-dom"
const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Stack direction="row" spacing={2}>
                    <ButtonGroup variant="contained">
                        <Button component={RouterLink} to="/">Home</Button>
                        <Button component={RouterLink} to="/newProduct">Create New Product</Button>
                    </ButtonGroup>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar