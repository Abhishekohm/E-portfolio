import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import School from './School';

const educationData = [
    {
        schoolName: "Y.S.K.Vidyalaya",
        from: "2005",
        till: "2017"
    },
    {
        schoolName: "K.J. Somaiya College",
        from: "June 2017",
        till: "Febuary 2019"
    },
    {
        schoolName: "VJTI, Mumbai",
        from: "Febuary 2021",
        till: "Now"
    }
]


export default function Education({ matches, fRef }) {
    return (
        <>
            <Typography
                variant='h2'
                sx={{ textAlign: "center" }}
                ref={fRef}
            >
                Education
            </Typography>
            <Timeline position={matches ? 'alternate' : 'right'} >
                {educationData.map((data, i) => (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <School {...data} i={i} matches={matches} />
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </>
    );
}