"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  RadioGroup,
  FormLabel,
  FormControl,
  Radio
} from "@mui/material";

type FormValues = {
  name: string;
  email: string;
  password: string;
};
interface SignUpProps {
    setIsLogin: (value: boolean) => void; // Define the prop
  }


  const SignUp: React.FC<SignUpProps> = ({ setIsLogin }) => {
    const [value, setValue] = React.useState('user');

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("data register", data);
    setIsLogin(true);
  };


  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <Container component="section" className="pt-8" maxWidth="lg">
     
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[50]
                  : theme.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <form
                // noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group">Choose your role</FormLabel>
  <Grid container alignItems="center">
    <Grid item>
      <FormControlLabel value="user" control={<Radio sx={{
    '&.Mui-checked': {
      visibility: 'visible',
    },
  }} />} label="Commentator" />
    </Grid>
    <Grid item>
      <FormControlLabel value="admin" control={<Radio sx={{
    '&.Mui-checked': {
      visibility: 'visible',
    },
  }} />} label="Author" />
    </Grid>
  </Grid>
</FormControl>
                <TextField
                  margin="normal"
                  fullWidth
                  //   name="name"
                  label="Name"
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  //   name="email"
                  {...register("email", { required: "Email is required" })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  fullWidth
                  //   name="password"
                  label="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/auth/login" variant="body2">
                      {"You have account? Login here"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
   
    </Container>
  );
};

export default SignUp;
