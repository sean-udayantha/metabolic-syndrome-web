import { Grid, Typography } from "@mui/material";
import React from "react";
import MemberCard from "./Components/MemberCard";
import Sanjeevi from "../../assets/images/sanjeevi.jpg";
import Suriyaa from "../../assets/images/suriyaa.jpg"; 
import Udayantha from "../../assets/images/udayantha.jpg"; 
import Aroshana from "../../assets/images/aroshana.png";
import Thilini from "../../assets/images/thilini.jpg"; 
import Malki from "../../assets/images/malki.jpg"; 
const AboutUs = ({ refProps }) => {
  const { AboutUsRef } = refProps;
  return (
    <>
      <Grid
        container
        ref={AboutUsRef}
        sx={{ minHeight: "calc(100vh - 64px)" , 
        padding:"5%", 
        
      }}
        rowGap={2}
        columnSpacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="overline">About Us</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color={"primary"}>
            Meet Our Team !
          </Typography>
        </Grid>

        <Grid item container xs={12} rowGap={2} columnSpacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <MemberCard
             imageUrl={Sanjeevi}
              name={"Sanjeevi Chandrasiri"}
              role={"Supervisor"}
              position={"Senior Lecturer"}
              linkedIn={"https://www.linkedin.com/in/nuwan-kodagoda-a4875a4"}
              email={"nuwan.k@sliit.lk"}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <MemberCard
             imageUrl={Suriyaa}
              name={"Suriyaa Kumari"} 
              role={"Co-Supervisor"}
              position={"Lecturer"}
              linkedIn={
                "https://www.linkedin.com/in/geethanjali-wimalaratne-60969653"
              }
              email={"geethanjali.w@sliit.lk"}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Udayantha}
            name={"Udayantha Yapa Y.M.S"}
            role={"Group Leader"}
            position={"Undergraduate"}
            Department={"Software Engineering"}
            linkedIn={"https://www.linkedin.com/in/"}
            email={"it20750374@sliit.lk"}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Aroshana}
            name={"Dissanayaka D.M.R. A"}
            role={"Group Member"}
            position={"Undergraduate"}
            Department={"Software Engineering"}
            linkedIn={"https://www.linkedin.com/in/"}
            email={"it20151638@my.sliit.lk"}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Thilini}
            name={"Herath H.M.T. P"}
            role={"Group Member"}
            position={"Undergraduate"}
            Department={"Software Engineering"}
            linkedIn={"https://www.linkedin.com/in/"}
            email={"it20275006@my.sliit.lk"}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MemberCard
            imageUrl={Malki}
            name={"Peiris B.M. G "}
            role={"Group Member"}
            position={"Undergraduate"}
            Department={"Information Technology"}
            linkedIn={"https://www.linkedin.com/in/"}
            email={"it20259334@my.sliit.lk"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
