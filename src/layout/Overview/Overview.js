import React from 'react';
import {Box, Container,Grid, useMediaQuery} from "@material-ui/core";
import {useStyles} from "./OverviewStyles";

const Overview = () => {

    const classes = useStyles();
    const noPadding = useMediaQuery('(min-width: 600px)')

    return (
        <Box bgcolor="#F0F0F0" pt={2} marginTop={4} pb={6}>
            <Container style={{padding: noPadding ? "0 80px" : "0 20px"}}>
                <Box display="flex" justifyContent="center">
                    <Box>
                        <h1 className={classes.title}>What we do</h1>
                        <hr width="100px" size="1px" color="#65ACB2" />
                    </Box>
                </Box>
                <Grid container className={classes.mainGrid} spacing={2}>
                    <Grid item lg={3} md={6} xs={12}>
                        <Box>
                            <img src="https://bit.ly/3ofWAMb" alt=""/>
                            <h2>Case Studies</h2>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <Box>
                            <img src="https://bit.ly/3m4EYAv" alt=""/>
                            <h2>Solutions</h2>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <Box>
                            <img src="https://bit.ly/3oiPIhd" alt=""/>
                            <h2>Exactpro Overview</h2>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <Box>
                            <img src="https://bit.ly/3oenN27" alt=""/>
                            <h2>Clients & Partners</h2>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Overview;
