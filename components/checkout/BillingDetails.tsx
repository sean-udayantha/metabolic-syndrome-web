import {
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import React from 'react'
import { billingDetailsFormTitle } from "@/data/checkoutPage";
import { lora, mulish } from "../../app/fonts";

/**
 * BillingDetails component is the form used in checkout page to input users billing details.
 */

/* Syles for text fields */
const textFieldStyles = {
  width: "100%",
  height: "48px",
  marginTop: "10px",
};

/* Styles for form labels */
const formLabelStyles = {
  color: "#11142D",
  fontSize: "16px",
  lineHeight: "120%",
  fontStyle: "normal",
  letterSpacing: "0.08px",
  fontWeight: "700",
  marginTop: "10px",
};

/* Font style for placeholder */
const mulishPlaceholderStyle = {
  fontFamily: "Mulish",
};

const BillingDetails = () => {
  return (
    <>
      {/* Card for the billing details form */}
      <Card
        elevation={0}
        sx={{
          height: "auto",
          maxWidth: "816px",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "#E1E1E1",
          flexShrink: "0",
        }}
      >
        <CardContent>
          <form>
            {/* Grid container for form layout */}
            <Grid container spacing={2} sx={{ padding: "15px 32px 15px 32px" }}>
              {/* Title for the billing details form */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  className={lora.className}
                  style={{
                    color: "#11142D",
                    fontSize: "24px",
                    lineHeight: "120%",
                    fontStyle: "normal",
                    letterSpacing: "0.12px",
                    fontWeight: "700",
                    marginTop: "10px",
                  }}
                >
                  {billingDetailsFormTitle}
                </Typography>
              </Grid>
              {/* First Name */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  className={mulish.className}
                  style={formLabelStyles}
                >
                  First Name
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your First Name in Here"
                  variant="outlined"
                  sx={textFieldStyles}
                  InputProps={{ style: mulishPlaceholderStyle }}
                />
              </Grid>
              {/* Last Name */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  className={mulish.className}
                  style={formLabelStyles}
                >
                  Last Name
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your Last Name in Here"
                  variant="outlined"
                  sx={textFieldStyles}
                  InputProps={{ style: mulishPlaceholderStyle }}
                />
              </Grid>
              {/* Email Address */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  className={mulish.className}
                  style={formLabelStyles}
                >
                  Email Address
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your Email Address in Here"
                  variant="outlined"
                  sx={textFieldStyles}
                  InputProps={{ style: mulishPlaceholderStyle }}
                />
              </Grid>
              {/* Phone Number */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  className={mulish.className}
                  style={formLabelStyles}
                >
                  Phone Number
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your Phone Number in Here"
                  variant="outlined"
                  sx={textFieldStyles}
                  InputProps={{ style: mulishPlaceholderStyle }}
                />
              </Grid>
              {/* Passport Number */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  className={mulish.className}
                  style={formLabelStyles}
                >
                  Passport Number
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your Email Address in Here"
                  variant="outlined"
                  sx={textFieldStyles}
                  InputProps={{ style: mulishPlaceholderStyle }}
                />
              </Grid>
              {/* Address */}
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  className={mulish.className}
                  style={formLabelStyles}
                >
                  Address
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Input your Address in Here"
                  variant="outlined"
                  sx={{
                    width: "100%",
                    height: "48px",
                    marginTop: "10px",
                    marginBottom: "30px",
                  }}
                  InputProps={{ style: mulishPlaceholderStyle }}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default BillingDetails;
