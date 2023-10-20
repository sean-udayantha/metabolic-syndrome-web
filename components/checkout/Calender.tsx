"use client";
import React, { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Import the styles
import "react-date-range/dist/theme/default.css";
import { calenderTitle } from "@/data/checkoutPage";
import { lora, mulish } from "../../app/fonts";

const Calender = () => {
  /* State for managing the selected date range */
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <>
      <Card
        elevation={0}
        sx={{
          borderRadius: "8px",
          maxWidth: "397px",
          border: "1px solid",
          borderColor: "var(--light-separators-colors-secondary, #E1E1E1)",
          height: "650px",
        }}
      >
        <CardContent>
          {/* Calendar title */}
          <Typography
            variant="h5"
            className={lora.className}
            style={{
              color: "#11142D",
              fontSize: "24px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.12px",
              fontWeight: "700",
              marginTop: "14px",
            }}
          >
            {calenderTitle}
          </Typography>
          <Box sx={{ backgroundColor: "" }}>
            {/* Calendar component */}
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </Box>
          {/* Terms and Conditions */}
          <Typography
            variant="h5"
            className={mulish.className}
            style={{
              color: "#11142D",
              fontSize: "16px",
              lineHeight: "120%",
              fontStyle: "normal",
              letterSpacing: "0.08px",
              fontWeight: "700",
              marginTop: "8px",
            }}
          >
            Terms and Conditions
          </Typography>
          {/* Special Request */}
          <Typography
            variant="body1"
            className={mulish.className}
            style={{
              color: "#9A9AB0",
              fontSize: "16px",
              lineHeight: "125%",
              fontStyle: "normal",
              letterSpacing: "0.08px",
              fontWeight: "400",
              marginTop: "16px",
            }}
          >
            Input your Special Request in Here
          </Typography>
          <Typography
            variant="body1"
            className={mulish.className}
            style={{
              color: "#9A9AB0",
              fontSize: "16px",
              lineHeight: "125%",
              fontStyle: "normal",
              letterSpacing: "0.08px",
              fontWeight: "400",
              marginTop: "16px",
            }}
          >
            Input your Special Request in Here
          </Typography>
          <Typography
            variant="body1"
            className={mulish.className}
            style={{
              color: "#9A9AB0",
              fontSize: "16px",
              lineHeight: "125%",
              fontStyle: "normal",
              letterSpacing: "0.08px",
              fontWeight: "400",
              marginTop: "16px",
            }}
          >
            Input your Special Request in Here
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Calender;
