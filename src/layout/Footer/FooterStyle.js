import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    mainGrid:{
        "& > *":{
            "& > h3":{
                fontWeight:"500",
                color:"white"
            },
            "& > h2":{
                color:"white",
                fontWeight:"600"
            },
            "& > ul":{
                margin:0,
                padding:0,
                display:"flex",
                flexDirection:"column",
                listStyle:"none",
                color:"white",
                "& > li":{
                    display:"flex",
                    paddingTop:"10px",
                    "& > span": {
                        paddingLeft: "15px",
                    }
                }
            }

        }
    },
    logo:{
        maxWidth:"100%"
    },
    icons:{
        maxWidth:"18px"
    },
    logoList:{
        color:"white",
        display:"flex",
        "& > ul":{
            flexWrap:"wrap",
            listStyle:"none",
            margin:0,
            padding:"10px 0",
            "& > li":{
                paddingLeft:"8px",
                cursor:"pointer",
            }
        }
    },
    githubIcon:{
        padding:"5px",
        backgroundColor:"#464F59",
        fontSize:"30px",
        transition:"2s",
        "&:hover":{
            backgroundColor:"#24292E"
        }
    },
    faceIcon:{
        padding:"5px",
        backgroundColor:"#777777",
        fontSize:"30px",
        transition:"2s",
        "&:hover":{
            backgroundColor:"#507CBE"
        }
    },
    twitterIcon:{
        padding:"5px",
        backgroundColor:"#B9B9B9",
        fontSize:"30px",
        transition:"2s",
        "&:hover":{
            backgroundColor:"#63CDF1"
        }
    },
    linkedinIcon:{
        padding:"5px",
        backgroundColor:"#BFBFBF",
        fontSize:"30px",
        transition:"2s",
        "&:hover":{
            backgroundColor:"#90CADD"
        }
    },
    ytIcon:{
        padding:"5px",
        backgroundColor:"#808080",
        fontSize:"30px",
        transition:"2s",
        "&:hover":{
            backgroundColor:"#F16261"
        }
    }
})