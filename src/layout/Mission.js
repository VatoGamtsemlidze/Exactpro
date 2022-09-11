import React from "react";
import { Box, Grid, makeStyles, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    maxWidth: "100%",
  },
  title: {
    color: "#333333",
    padding: 0,
    margin: 0,
  },
  missionParagraph: {
    animationName: "$entrance",
    animationDuration: "2s",
  },
  missionImage: {
    animationName: "$entranceLeft",
    animationDuration: "2s",
  },
  "@keyframes entrance": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes entranceLeft": {
    "0%": {
      opacity: 0,
      transform: "translateX(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

const Mission = () => {
  const classes = useStyles();
  const fullWidth = useMediaQuery("(min-width: 960px)"); //to generate font-size: 18px only from
  const fontTransform = useMediaQuery("(max-width: 850px)"); // 850pxs to 960px

  return (
    <Box pt={5}>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.missionParagraph}>
          <h1 className={classes.title}>Our Mission</h1>
          <hr width="95px" color="#65ACB2" align="left" size="1" />
          <p
            style={{ fontSize: !fullWidth && !fontTransform ? "18px" : "16px" }}
          >
            Exactpro specializes in quality assurance services and related
            software development with focus on test automation for securities
            data distribution, trading systems, risk management, market
            surveillance and post-trade infrastructures.
            <br />
            <br />
            We use bespoke tools and methods for every challenge and do whatever
            it takes to help our clients.
          </p>
          <br />
        </Grid>
        <Grid item xs={12} md={6} className={classes.missionImage}>
          <img
            className={classes.image}
            src="https://exactpro.com/sites/default/files/styles/news_teaser/public/media/mission.jpg?itok=0FKfqVsX"
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mission;
