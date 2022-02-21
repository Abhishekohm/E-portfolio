import React from 'react'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// large : 7em, 

import codingImage from "./../assets/coding-theme-img.jpg"
const Intro = () => {
    return (
        <Grid container sx={{ flexDirection: "row", height: { xs: "300px", md: "500px" }, overflow: "hidden" }}>
            <Grid data-aos="slide-right" item xs="12" md="6" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: { xs: "center", md: "start" } }}>
                <Typography
                    variant='h1'
                    sx={{ fontSize: { xs: "3em", sm: "6em" } }}
                >
                    Hi There,
                </Typography>
                <Typography
                    variant='h3'
                    sx={{ fontSize: { xs: "2em", sm: "3em" } }}
                >
                    I'm <span style={{ color: "#d60265", textShadow: "1.5px 1.5px 1px black" }}>Abhishek Gupta</span>
                </Typography>
                <Typography
                    variant='subtitle1'
                    sx={{ fontSize: { xs: "1em", sm: "1.5em" } }}
                >
                    Full stack developer, Competitive programmer, Avid learner
                </Typography>
                <Container
                    sx={{ padding: "0 !important", textAlign: { xs: "center", md: "start" } }}
                >
                    <IconButton href="https://www.facebook.com/people/Abhishek-Gupta/100073291547670/" size="large" className='social-icons' sx={{ backgroundColor: "#ff6600", color: "white", marginRight: "10px", fontSize: "30px" }} className="social-icons" >
                        <FacebookIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton href="https://www.instagram.com/abhishek_ohm/" size="large" className='social-icons' sx={{ backgroundColor: "#ff6600", color: "white", marginRight: "10px", fontSize: "30px" }} className="social-icons" >
                        <InstagramIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton href="https://github.com/Abhishekohm" size="large" className='social-icons' sx={{ backgroundColor: "#ff6600", color: "white", marginRight: "10px", fontSize: "30px" }} className="social-icons" >
                        <GitHubIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/abhishek-gupta-a165101bb/" size="large" className='social-icons' sx={{ backgroundColor: "#ff6600", color: "white", marginRight: "10px", fontSize: "30px" }} className="social-icons" >
                        <LinkedInIcon fontSize="inherit" />
                    </IconButton>
                </Container>
            </Grid>
            <Grid data-aos="slide-left" item sx={{ display: { xs: "none", md: "flex" } }} xs="6">
                <img src={codingImage} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </Grid>
        </Grid >

    )
}

export default Intro