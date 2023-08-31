"use client"
import * as React from "react";
import {useForm} from "react-hook-form"
import {Container,Typography,Grid,Box, Paper,Link,Checkbox,FormControlLabel,TextField, CssBaseline, Button} from "@mui/material";


type FormValues={
    name:string
    email: string
    password:string
}
const SignUpSide: React.FC = () => {
 
 const form= useForm<FormValues>({
    defaultValues:{
        name:'',
        email:'',
        password:''

    }
 })
const  {register,handleSubmit}=form


//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };
const onSubmit=(data:FormValues)=>{
    console.log('data register', data)
}



  return (
    <Container component="section" maxWidth="lg">
      <Box sx={{ marginTop: 8 }}>
        <Grid container>
          <CssBaseline />
          {/* <Grid
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
          /> */}
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
                // component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                // sx={{ mt: 1 }}
               
              >
                <TextField
                  margin="normal"
                 
                  fullWidth
                //   name="name"
                  label="Name"
                  type="text"
                  id="name"
                  {...register("name", {required:"Name is required"})}
                   autoComplete="name"
                   autoFocus
                />
                <TextField
                  margin="normal"
             
                  fullWidth
                  id="email"
                  label="Email Address"
                //   name="email"
                  {...register("email", {required:"Email is required"})}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                
                  fullWidth
                //   name="password"
                  label="Password"
                  type="password"
                  {...register("password", {required:"Password is required"})}
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
      </Box>
    </Container>
  );
};

export default SignUpSide;
