import React from 'react';
import {Box, Container, useMediaQuery} from "@material-ui/core";
import {useStyles} from "./NavigationStyles";

const Navigation = () => {

    const classes = useStyles()
    const noPadding = useMediaQuery('(min-width: 600px)')
    const navigation = useMediaQuery('(min-width: 760px)')

    return (
            <>
                <div className={classes.main}>
                    <Container style={{padding: noPadding ? "0 80px" : "0 20px",display:"flex"}}>
                        <h1 className={classes.category}>About Us</h1>
                    </Container>
                </div>
                <Box bgcolor="#1E2736" lineHeight="50px" display={navigation ? "block" : "none"}>
                    <Container className={classes.slide} style={{padding: noPadding ? "0 80px" : "0 20px",display:"flex",}}>
                        <ul className={classes.list}>
                            <li>About us</li>
                            <li>Management team</li>
                            <li>Locations</li>
                            <li>Pearson VUE</li>
                            <li>Gender pay gap report</li>
                        </ul>
                    </Container>
                </Box>
                <Box className={classes.slide}>
                    <Container style={{padding: noPadding ? "0 80px" : "0 20px",display:"flex"}}>
                        <ul className={classes.navList}>
                            <li>EXACTPRO</li>
                            <li>Company</li>
                            <li style={{color:"gray"}}>About us</li>
                        </ul>
                    </Container>
                </Box>
            </>
    );
};

export default Navigation;
