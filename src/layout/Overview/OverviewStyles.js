import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    title: {
        color: "#333333",
        fontSize:"38px",
        margin:0,
        paddingTop:20
    },
    mainGrid: {
        paddingTop:20,
        "& > *": {
            "& > *":{
                display: "flex",
                alignItems:"center",
                backgroundColor: "#F5F5F5",
                cursor:"pointer",
                "&:hover":{
                    backgroundColor:"white",
                    "& > h2":{
                        color: "#3F979F"
                    }
                },
                "& > img":{
                    maxWidth:"100%"
                },
                "& > h2": {
                    color:"#223244",
                    fontWeight:"500",
                    fontSize:"22px",
                }
            }
        }
    }
})