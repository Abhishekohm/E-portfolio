import React from 'react'
import { Grid, Container, Typography } from '@mui/material'
import databaseImage from "../assets/databaseIllustation.webp"
import databases from "../data_deploy.js"
import { Tooltip, Button } from '@mui/material'
const Databases = ({ matches, useStyles }) => {
    const classes = useStyles();
    return (
        <Container maxWidth="100%" >
            <Typography
                variant='h2'
                sx={{ textAlign: "center" }}
            >
                Databases and Tools
            </Typography>
            <Grid container flexDirection={{ xs: "column-reverse", md: "row" }}>
                <Grid data-aos="slide-right" xs="12" md="6" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }} item >
                    {databases.map((database) => {

                        return <Tooltip title={database.title.toUpperCase()} placement="top" style={{ margin: "0 !important", padding: "0 !important" }} >
                            <Button className={matches ? classes.customBtnWidth1 : classes.customBtnWidth2}>
                                <img src={database.img} alt={database.title} style={{ width: "100%", height: "100%" }} />
                            </Button>
                        </Tooltip>
                    })}
                </Grid>
                <Grid data-aos="slide-left" xs="12" md="6" item>
                    <img src={databaseImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Databases