"use client"
import React, { useState } from "react";
import { Button, TextField, Typography, Container, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { login, setUsername } from "@/redux/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  // Define a function to handle user login.
  const handleLogin = () => {
    // Simulate a login action by creating a user data object.
    const userData = { username: formData.email }; // Use email as username for simplicity
    // Dispatch the 'login' action from the 'authSlice' with the user data.
    dispatch(login(userData));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
    // Dispatch the setUsername action to update the Redux state with the username
    dispatch(setUsername(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here, e.g., send data to the server
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange(e, "password")}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleLogin}
              variant="contained"
              color="primary"
              fullWidth
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
