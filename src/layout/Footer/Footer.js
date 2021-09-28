import React from 'react';
import {Box, Container, Grid, makeStyles, useMediaQuery} from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {useStyles} from "./FooterStyle";

const Footer = () => {

    const classes = useStyles();
    const noPadding = useMediaQuery('(min-width: 600px)')
    const center = useMediaQuery('(min-width: 960px)')

    return (
        <Box bgcolor="#1E2736" marginTop={5}>
            <Container style={{padding: noPadding ? "0 80px" : "0 20px"}}>
                <Box pt={5} pb={7}>
                    <Grid container className={classes.mainGrid} style={{textAlign: center ? "left" : "center"}}>
                        <Grid item md={4} xs={12}>
                            <img className={classes.logo} src="https://bit.ly/3kIwU8V" alt=""/>
                            <h3>Build Software to Test Software</h3>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <h2>Contact Us</h2>
                            <hr width="40px" size="1px" align={center ? "left" : "center"} color="#65ACB2" />
                            <ul  style={{alignItems:center ? "flex-start" : "center"}}>
                                <li><EmailIcon className={classes.icons}/><span>info@exactpro.com</span></li>
                                <li><PhoneIcon className={classes.icons}/><span>44 (0) 20 3319 1644</span></li>
                                <li><PhoneIcon className={classes.icons}/><span>+1 (646) 340 3000</span></li>
                            </ul>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <h2>Follow Us</h2>
                            <hr width="40px" size="1px" align={center ? "left" : "center"} color="#65ACB2" />
                            <Box className={classes.logoList} style={{justifyContent:center ? "flex-start" : "center"}}>
                                <ul style={{display:"flex", flexDirection:"row"}}>
                                    <li style={{padding:0}}><GitHubIcon className={classes.githubIcon}/></li>
                                    <li><FacebookIcon  className={classes.faceIcon}/></li>
                                    <li><TwitterIcon  className={classes.twitterIcon}/></li>
                                    <li><LinkedInIcon  className={classes.linkedinIcon}/></li>
                                    <li><YouTubeIcon  className={classes.ytIcon}/></li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <hr size="1px" color="#4B525E"/>
                <Box p={noPadding ? "0 125px" : "0 0"}>
                    <p style={{textAlign:"center",color:"white",fontSize:"12px",fontWeight:"bold"}}>Copyright © 2009 - 2021 Exactpro. All Rights Reserved.
                        Exactpro refers to Exactpro Systems Limited, registered
                        in England and Wales, and/or one of its subsidiaries,
                        each of which is a separate legal entity, registered
                        in the relevant jurisdictions.
                        <br/>
                        Terms and Conditions Privacy policy Cookies policy</p>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
