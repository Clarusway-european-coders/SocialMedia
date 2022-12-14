import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import LoginCtn, { ButtonContainer, Title } from "./LoginContainer.styled";
import * as yup from "yup";
import { Formik, Form } from "formik";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Register from "../../auth/register";
import Login, { LoginWithGoogle } from "../../auth/login";
import google from "../../assets/Images/google.png";

const loginSchema = (condition) =>
  yup.object().shape({
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
    username: yup.string().when([], {
      is: () => !condition,
      then: yup.string().required("Enter a username"),
      otherwise: yup.string().notRequired(),
    }),
  });
// bcs of the schema above, it doesn't let me submit on the login page, because it looks for the
// username field but can't find it thus preventing users to logged in.
// With is, then, and otherwise logic we can decide what the check for.

const LoginContainer = ({ isLogin }) => {
  // handleChange and handleBlur work exactly as expected--they use a name or id attribute to figure out which field to update.

  const navigate = useNavigate();
  const formRef = useRef();
  const dispatch = useDispatch();

  // You can not initilize react hooks inside js files but you can send them as arguments.
  //
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", rePass: "", username: "" }}
        validationSchema={loginSchema(isLogin)}
        innerRef={formRef}
        onSubmit={(values, actions) => {
          console.log("ala");
          if (isLogin) {
            Login(values, navigate, dispatch);
          } else {
            console.log("register");
            Register(values, navigate, dispatch);
          }
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
        }) => (
          <Form>
            <LoginCtn variant={isLogin}>
              <Title>{isLogin ? "Welcome" : "Sign Up"}</Title>
              {!isLogin && (
                <TextField
                  label="User Name"
                  id="username"
                  name="username"
                  type="text"
                  variant="outlined"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  required
                />
              )}
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
                required
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
                required
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
                  required
                />
              )}
              <Box sx={{ fontSize: "12px" }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to company policies"
                />
                {isLogin && (
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    sx={{
                      textDecoration: "underline",
                      color: "#03A9F4",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/signup")}
                  >
                    Don't have an account? Click Here
                  </Typography>
                )}
                {!isLogin && (
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    sx={{
                      textDecoration: "underline",
                      color: "#03A9F4",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/login")}
                  >
                    Already have an account? Sign in here...
                  </Typography>
                )}
              </Box>
              <Button
                variant="contained"
                type="submit"
                sx={{ borderRadius: "100px", backgroundColor: "#03A9F4" }}
                disabled={isSubmitting}
              >
                {isLogin ? "Login" : "Sign Up"}
              </Button>
              <ButtonContainer
                onClick={() => LoginWithGoogle(navigate, dispatch)}
              >
                <img src={google} alt="" />
                Sign in With Google
              </ButtonContainer>
            </LoginCtn>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginContainer;
