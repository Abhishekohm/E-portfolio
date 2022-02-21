import React from 'react'
import { Container, Link, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ff6600", height: "50px" }}>
            <Typography
                variant='overline'
            >
                Made with Code By <Link href="https://www.linkedin.com/in/abhishek-gupta-a165101bb/" sx={{ color: "#fff" }} >Abhishek Gupta</Link>
            </Typography>
        </Container>
    )
}

export default Footer