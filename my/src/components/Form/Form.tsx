
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
  Input,
} from "@mui/material";

type FormValues = {
  title: string;
  text: string;
  image: FileList; // Use FileList to handle file input
};

const Form: React.FC = () => {
    const form = useForm<FormValues>({
        defaultValues: {
          title: "",
          text: "",
        //   image: [] // Change 'imag' to 'image'
        },
      });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Data submitted:", data);
  };

  return (

    <Container component="div" maxWidth="lg">
    {/* <Box sx={{ marginTop: 8 }}> */}
      {/* <Grid container spacing={2}> */}
        <CssBaseline />

        {/* <Grid item  xs={12} sm={8} md={6} lg={5} component={Paper} elevation={6} square> */}
          <Box
            sx={{
                width:"100%",
            
              
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography component="h1" variant="h5" className="mb-4">
              Add a Post
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Title"
                {...register("title", { required: "Title is required" })}
                error={!!errors.title}
                helperText={errors.title?.message}
                className="mb-2 hover:outline-violet-700 focus:outline-violet-700"
              />
              <TextField
                fullWidth
                label="Text"
                multiline
                rows={4}
                {...register("text", { required: "Text is required" })}
                error={!!errors.text}
                helperText={errors.text?.message}
                className="mb-2"
              />
              <input
                type="file"
                accept="image/*"
                {...register("image")}
                className="mb-2"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Post
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    Go home
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        {/* </Grid> */}
      {/* </Grid> */}
    {/* </Box> */}
  </Container>
  );
};

export default Form;
