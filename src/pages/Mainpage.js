import React from 'react';
import Mission from "../layout/Mission";
import {Box} from "@material-ui/core";
import Overview from "../layout/Overview/Overview";
import Content from "../components/Content";
import Experience from "../layout/Experience";
import SoftwareTesting from "../layout/SoftwareTesting";
import Footer from "../layout/Footer/Footer";

const Mainpage = () => {
    return (
        <Box>
            <Content>
                <Mission/>
            </Content>
            <Overview/>
            <Experience/>
            <SoftwareTesting/>
            <Footer/>
        </Box>
    );
};

export default Mainpage;
