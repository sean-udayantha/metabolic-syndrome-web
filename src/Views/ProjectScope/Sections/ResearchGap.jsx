import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const ResearchGap = () => {
  return (
  <>
  <Grid container
     sx={{
      paddingLeft:"5%",
     }}
    >
      <Grid item xs={12}>
        <Typography variant="h6">Research Problem</Typography>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={12}>
      <Card sx={{ Width: "50%" }}>
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
              The proposed solution for the personalized automated health guidance system for metabolic syndrome is to use advanced technology to create a comprehensive health profile of individuals. 
              The system integrates various data sources such as personal health information, medical history, and lab results to provide personalized guidance on diet, physical activity, and medications. 
              Real-time monitoring of vital signs, such as blood pressure, blood sugar levels, and body weight, helps identify potential health issues early. The system is also integrated with mobile apps to collect real-time data on physical activity and dietary habits, providing real-time feedback and support to individuals. 
              Interactive educational modules and resources are provided to help individuals understand their condition and manage it effectively. Telemedicine integration allows for remote consultations with healthcare providers, making it useful for individuals in remote or underserved areas. The effectiveness of the system will be evaluated through a randomized controlled trial, and the results could inform the development of similar systems for other chronic conditions and improve the care of individuals with metabolic syndrome.
              </Typography>
            </CardContent>
          </Card>
      </Grid>
    </Grid>
  </>);
};

export default ResearchGap;
