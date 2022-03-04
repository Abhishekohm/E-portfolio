import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const School = ({ schoolName, from, till, i, matches }) => {
    return (
        <Card data-aos={matches === false ? "slide-right" : (i % 2 === 0 ? "slide-left" : "slide-right")}>
            <CardContent>
                <Typography
                    variant='h4'
                >
                    {schoolName}
                </Typography>
                <Typography
                    variant='subtitle'
                >
                    {from} - {till}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default School