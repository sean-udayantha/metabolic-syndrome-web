import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import SystemDirgram from "../../../assets/images/systemDirgram.png";
const Methodology = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={4}
        sx={{
          paddingLeft: "5%",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="overline">Methodology</Typography>
        </Grid>
        <Grid item xs={6}>
          <img
            alt="amLogo"
            src={SystemDirgram}
            style={{
              width: "75%",
              height: "auto",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              {/* <Typography
                color={"primary"}
                gutterBottom
                variant="h6"
                component="div"
              >
                sdfghjkl;''
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                Marks Allocated :
              </Typography> */}
              <Typography variant="body2" color="text.secondary">
                Specialized domain expertise for a personalized automated health
                guidance system for metabolic syndrome requires a comprehensive
                understanding of the metabolic syndrome condition, including its
                causes, risk factors, symptoms, and available treatments. Data
                requirements for the system include health information such as
                medical history, lab results, and vital signs, as well as
                information about dietary habits, physical activity levels, and
                medication use. This data should be collected from various
                sources, including electronic health records, mobile apps to
                create a comprehensive health profile of the individual. To
                evaluate and understand the gathered data, this system's
                development also needs knowledge in artificial intelligence,
                machine learning, and data analytics. Advanced algorithms and
                models are needed for the system to be able to deliver
                customized suggestions based on the user's particular health
                profile. We can also get access to a lot of raw data from an
                online community platform for data scientists and machine
                learning hobbyists, including datasets for BIM, diabetes, blood
                pressure, and heart attack analysis and prediction. Finally, the
                system should be user-friendly and accessible, with a user
                interface that is intuitive and easy to navigate, to encourage
                adoption and engagement among individuals with metabolic
                syndrome. This requires knowledge of human-computer interaction,
                user-centered design, and user experience design.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Methodology;
