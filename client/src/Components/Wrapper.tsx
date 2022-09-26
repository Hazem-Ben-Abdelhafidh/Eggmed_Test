import { Box } from "@mui/system"
interface Props {
    children: React.ReactNode
}
const Wrapper = (props: Props) => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
            overflow: "hidden",
            padding: "7px"

        }}>
            {props.children}
        </Box>
    )
}

export default Wrapper