import React from 'react';
import {Container, useMediaQuery} from "@material-ui/core";
import Topbar from "../layout/Topbar/Topbar";

const Content = ({children}) => {

    const noPadding = useMediaQuery('(min-width: 450px)')

    return (
        <>
            <Topbar/>
            <Container style={{padding: noPadding ? "0 80px" : "0 20px"}}>
                {children}
            </Container>
        </>
    );
};

export default Content;
