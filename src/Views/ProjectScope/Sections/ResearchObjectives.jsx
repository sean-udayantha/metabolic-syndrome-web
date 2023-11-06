import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const ResearchObjectives = () => {
  return (
    <>
      <Grid
        container
        sx={{
          paddingLeft: "5%",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6">Research Objectives</Typography>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              {/* <Typography color={"primary"} gutterBottom variant="h6" component="div">
      
        </Typography> */}
              <Typography gutterBottom variant="subtitle1" component="div">
                Main Research Objective
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The personalized automated health guidance system for people
                with metabolic syndrome's main goal is to provide a
                comprehensive platform that can provide individualized and
                accurate health suggestions. These suggestions are intended to
                improve general health and lower the chance of coexisting
                disorders like diabetes and heart disease. The system will make
                use of machine learning algorithms, customized health programs,
                and enticing messaging to promote lifestyle changes and improve
                adherence to health regimens. Additionally, the system's
                scanning capabilities will be easily integrated, enabling
                real-time monitoring of critical health metrics. By keeping the
                advice current and pertinent to each person's changing health
                situation, this integration increases the effectiveness of the
                advice given. The overall goal of this initiative is to improve
                the health of those with metabolic syndrome to lessen the
                overall burden that this condition places on society.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};

export default ResearchObjectives;
