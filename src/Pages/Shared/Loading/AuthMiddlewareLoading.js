import { CircularProgress, Container } from "@mui/material"

function AuthMiddlewareLoading() {
    return (
        <Container sx={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"400px"}}>
            <CircularProgress size={50} thickness={5} sx={{color:"#19d3ae"}} />
        </Container>
    )
}

export default AuthMiddlewareLoading
