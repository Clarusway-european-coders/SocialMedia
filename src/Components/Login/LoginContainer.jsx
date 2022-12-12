import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";
import LoginCtn, { Title } from "./LoginContainer.styled";
import * as yup from "yup";
import { Formik, Form } from "formik";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please  enter an email"),
  password: yup
    .string()
    .required("Please enter a password ")
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});

const LoginContainer = ({ isLogin }) => {
  // handleChange and handleBlur work exactly as expected--they use a name or id attribute to figure out which field to update.
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", rePass: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          //   login(values);
          //   navigate("/stock");
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          touched,
          errors,
          isSubmitting,
        }) => (
          <Form>
            <LoginCtn variant={isLogin}>
              <Title>{isLogin ? "Welcome" : "Sign Up"}</Title>
              <TextField
                label="Email"
                name="email"
                id="email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                label="Password"
                name="password"
                id="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              {!isLogin && (
                <TextField
                  label="Password-Repeat"
                  id="rePass"
                  name="rePass"
                  type="password"
                  variant="outlined"
                  value={values.rePass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              )}
              <Box sx={{ fontSize: "12px" }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to company policies"
                />
                <p></p>
              </Box>
              <Button
                variant="contained"
                sx={{ borderRadius: "100px", backgroundColor: "#03A9F4" }}
                disabled={isSubmitting}
              >
                Login
              </Button>
            </LoginCtn>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginContainer;
