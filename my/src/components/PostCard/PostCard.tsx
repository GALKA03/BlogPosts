"use client"
import {Typography,Button,CardMedia,CardContent, CardActions,Card } from '@mui/material';


const PostCard=()=>{
    return(
        <>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="blog img"
          height="140"
          src="/imgs/blogImg.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className='bg-green-500'>Share</Button>
          <Button size="small" className='bg-green-800'>Learn More</Button>
        </CardActions>
      </Card>
      </>
    )
}
export default PostCard