import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    main:{
        backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/511/206/398/noir-blue-by-boris-wallpaper-preview.jpg") `,
        backgroundSize:"cover",
        height:"auto",
        width:"100%",
        marginTop:"45px"
    },
    category:{
        color:"white",
        height:"140px",
        paddingTop:"70px",
        animationName: "$entrance",
        animationDuration: "2s"
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
    list:{
        display:"flex",
        padding:"0",
        minHeight:"100%",
        listStyle:"none",
        flexWrap:"wrap",
        "& > *":{
            padding: "0 10px",
            color:"white",
            cursor:"pointer",
            transition: "1s",
            "&:hover":{
                backgroundColor:"#7d7a7a",
                borderRadius:"5px"
            }
        }
    },
    navList:{
        display:"flex",
        listStyle:"none",
        cursor: "pointer",
        padding: 0,
        "& > *":{
            paddingLeft:"10px",
            "&::after": {
                content: '" >"',
                color:"lightgray"
            },
            "&:hover":{
                color:"gray"
            }
        }
    },
    slide:{
        animationName: "$entrance",
        animationDuration: "1.5s",
    }
})