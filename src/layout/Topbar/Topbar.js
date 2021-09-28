import React from 'react';
import {AppBar, Button, Container, Grid, useMediaQuery} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from "./TopbarStyle";
import Navigation from "../Navigation/Navigation";


const Topbar = () => {

    const classes = useStyles();
    const logoComment = useMediaQuery('(min-width: 1000px)')
    const iconCaptions = useMediaQuery('(min-width: 700px)')
    const containerPadding = useMediaQuery('(min-width: 600px)')

    return (
        <div>
            <AppBar position="fixed" style={{background:"white", color:"black",height:"62px",marginTop:"-15px"}}>
            <Container style={{padding: containerPadding ? "0 80px" : "0 20px"}}>
                <Grid container>
                    <Grid item xs={6}>
                        <ul className={classes.list}>
                            <li><img className={classes.logo} src="https://bit.ly/39DYBtp" alt=""/></li>
                            <li style={{display: logoComment ? "block" : "none",paddingTop:"9px", paddingLeft:"20px"}}>Build Software to Test Software</li>
                        </ul>
                    </Grid>
                    <Grid item style={{display:"flex", width:"50%", justifyContent:"flex-end"}}>
                        <ul className={classes.navigation}>
                            <li className={classes.liTag}><SearchIcon className={classes.icons}/><span style={{display: iconCaptions ? "block" : "none"}}>Search</span></li>
                            <li className={classes.liTag}><SubscriptionsOutlinedIcon className={classes.icons}/><span style={{display: iconCaptions ? "block" : "none"}}>Subscribe</span></li>
                            <li className={classes.liTag}><MailOutlineIcon className={classes.icons}/><span style={{display: iconCaptions ? "block" : "none"}}>Contact Us</span></li>
                            <li className={classes.menu}>
                                <Button
                                    style={{color:"white", textTransform:"capitalize",backgroundColor:"#38868C", height:"100%"}}>
                                    <MenuIcon className={classes.icons}/>Menu
                                </Button>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
            </AppBar>
            <Navigation/>
        </div>
    );
};

export default Topbar;
