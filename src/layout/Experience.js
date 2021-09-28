import React from 'react';
import {Box, Container, Grid, makeStyles, useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles({
    mainBox:{
        backgroundImage: `url("https://bit.ly/2XTaYz9")`,
        backgroundSize: "cover",
        backgroundPosition:"center center",
        backgroundRepeat:"no-repeat"
    },
    mainGrid:{
        "& > h1":{
            fontSize:"40px",
            margin:0,
            paddingTop:30,
            color:"white"
        },
        "& > p":{
            color:"white",
            fontSize:"17px"
        }
    },
})

const Experience = () => {

    const classes = useStyles();
    const noPadding = useMediaQuery('(min-width: 600px)')

    return (
        <Box className={classes.mainBox} pb={5}>
            <Container style={{padding: noPadding ? "0 80px" : "0 20px"}}>
                <Grid container>
                    <Grid item md={6} xs={12} className={classes.mainGrid}>
                        <h1>Our Experience</h1>
                        <hr width="100px" size="3px" color="#65ACB2" align="left" />
                        <p>Our team has in-depth understanding of the technologies and business logic behind matching engines,
                            smart order routing, algorithmic trading, order management, market data dissemination, straight-through
                            processing, clearing and settlement for equities, fixed income, FX, listed and OTC derivatives.
                            <br /><br/>
                            We have considerable experience working with ultra-low latency systems and FIX-based solutions.
                            In addition to functional and non-functional testing, we also verify that our customers' systems
                            are compliant with regulations.</p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Experience;
