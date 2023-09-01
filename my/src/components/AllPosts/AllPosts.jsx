"use client"
import * as React from 'react';
import {Paper, Box, styled} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import PostCard from '../PostCard/PostCard';

const AllPosts= ()=> {
  const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            // padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }));
       
        return(
            <>
            <h1>Blog page</h1>
            <Box sx={{ flexGrow: 1 }}>
            <Grid  container spacing={2}>
  <Grid  xs="auto">
    <Item>
        <PostCard/>
    </Item>
  </Grid>
  <Grid xs="auto">
    <Item> 
        <PostCard/>
        </Item>
  </Grid>
  <Grid xs="auto">
    <Item> 
        <PostCard/>
    </Item>
  </Grid>
</Grid>
          </Box>
          </>
        )
    }
export default AllPosts