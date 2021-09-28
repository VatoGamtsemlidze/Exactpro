import React from 'react';
import {Box, Button, Container, makeStyles, useMediaQuery} from "@material-ui/core";
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';

const useStyles = makeStyles({
    title:{
        fontSize:"40px",
        color: "#333333",
        padding:0,
        margin:0
    },
    paragraph:{
        fontSize:"17px",
        color:"#333333"
    }
})

const SoftwareTesting = () => {

    const classes = useStyles()
    const noPadding = useMediaQuery('(min-width: 600px)')

    return (
        <>
            <Container style={{padding: noPadding ? "0 80px" : "0 20px"}}>
                <Box pt={5}>
                    <h1 className={classes.title}>The Deliberate Practice of Software Testing</h1>
                    <hr width="95px" color="#65ACB2" align="left" size="2px"/>
                    <p className={classes.paragraph}>The test libraries and tools we have developed over the years apply to various business contexts, from regulated markets to MTFs, from dark pools to clearinghouses and brokerage systems. They have been successfully implemented in a wide range of technical and middleware infrastructures.
                        <br/><br/>
                        Modern exchange platforms are highly sophisticated by design and require continuous testing to ensure their resilience.
                        <br/><br/>
                        Our Deliberate Practice of Software Testing approach is based on modelling the system under test, which allows us to create test libraries that serve as an executable specification for such highly complex platforms. This is a deliberate practice, meaning that it is systematic and focused on achieving the specific goal of improving performance.
                        <br/><br/>
                        Instead of relying on a fixed data subset, we constantly strive to widen the testing scope. Instead of confining the test scope to a limited number of requirements, we have learned to see the system under test as something that evolves and changes over time, and is not a static sum of its parts.
                        <br/><br/>
                        Software testing is relentless learning. The best software testing instrument is the human brain.
                        <br/><br/>
                        We create a mental model of the system (the Theory of Everything), implement it in the code (Build Software to Test Software) and use it to produce a multitude of relevant test scenarios and their expected outcomes.</p>
                </Box>
            </Container>
            <Box display="flex" justifyContent="flex-end" marginTop={-7}>
                <Button onClick={(e)=> window.scrollTo({top:0})} variant="contained"style={{borderRadius:"100%", height:"60px",backgroundColor:"#585858",color:"white"}} ><ArrowUpwardSharpIcon/></Button>
            </Box>
        </>
    );
};

export default SoftwareTesting;
