import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import codingIllustration from "../assets/skills-illustrations.png"
import skills from "../skill_icons.js"
import { Tooltip, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const Skills = ({ matches, useStyles, fRef }) => {
    const classes = useStyles();
    return (
        <Container maxWidth="100%" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} ref={fRef}>
            <Grid container justifyContent='center' id="skills">
                <Typography
                    variant='h2'
                >
                    Skills
                </Typography>
            </Grid>
            <Grid container sx={{ flexDirection: { xs: "column", md: "row" } }}>
                <Grid data-aos="slide-right" xs="12" md="6" item>
                    <img src={codingIllustration} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </Grid>
                <Grid data-aos="slide-left" xs="12" md="6" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }} item >
                    {skills.map((skill) => {

                        return <Tooltip title={skill.title.toUpperCase()} placement="top" style={{ margin: "0 !important", padding: "0 !important" }} >
                            <Button className={matches ? classes.customBtnWidth1 : classes.customBtnWidth2}>
                                <img src={skill.img} alt={skill.title} style={{ width: "100%", height: "100%" }} />
                            </Button>
                        </Tooltip>
                    })}
                </Grid>
            </Grid>
            <Grid container style={{ justifyContent: "flex-end" }}>
                <List sx={{ width: { xs: "100%", md: "50%" } }}>
                    <ListItem data-aos="slide-left" data-aos-delay="200" data-aos-offset="100px" >
                        <ListItemAvatar>
                            <Avatar>
                                <ArrowForwardIosSharpIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Have built number of projects using MERN stack."
                        />
                    </ListItem>
                    <ListItem data-aos="slide-left" data-aos-delay="200" data-aos-offset="100px"  >
                        <ListItemAvatar>
                            <Avatar>
                                <ArrowForwardIosSharpIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Have used C++ to solve DSA based questions and for competative programming. Also have knowledge about C++ STL Library."
                        />
                    </ListItem>
                    <ListItem data-aos="slide-left" data-aos-delay="200" data-aos-offset="100px"  >
                        <ListItemAvatar>
                            <Avatar>
                                <ArrowForwardIosSharpIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Have used python for data interpretation and analysis using libraries like numpy, matplotlib, pandas."
                        />
                    </ListItem>
                </List>
            </Grid>
        </Container>
    )
}

export default Skills