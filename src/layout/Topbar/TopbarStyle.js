import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    list:{
        display:"flex",
        listStyle:"none",
        padding:0,
    },
    navigation:{
        listStyle:"none",
        display:"inline-flex",
        alignItems:"center",
        width:"90%",
        justifyContent:"space-around",
        padding:"0",
        "& > *":{
            height:"100%",
            padding:"0 10px",
            cursor: "pointer",
            transition: "1s",
            "&:hover":{
                color:"#38868C",
                backgroundColor:"#eeeeee"
            }
        }
    },
    "@keyframes entrance": {
        "0%": {
            opacity: 0,
            transform: "translateX(-200%)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }

    },
    logo:{
        maxWidth:"120px",
        animationName: "$entrance",
        animationDuration: "2s"
    },
    icons:{
        maxWidth:"22px",
        paddingRight:"5px"
    },
    liTag:{
        display:"inline-flex",
        alignItems:"center",
    },
    menu:{
        display:"inline-flex",
        alignItems:"center",
        color:"white",
        "&:hover":{
            backgroundColor:"#38868C"
        }
    }
})