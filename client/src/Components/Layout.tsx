import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
    return (
        <Box >
            <NavBar />
            <main>
                <Outlet />
            </main>
        </Box >
    )
}

export default Layout