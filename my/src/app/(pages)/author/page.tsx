"use client"
import InfoCard from "@/components/Form/Form";
import {useState} from "react"
import { Paper, Box, styled, Typography,Button,CardMedia,CardContent, CardActions,Card  } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import PostCard from '@/components/PostCard/PostCard';
import Link from "next/link";
import Modal from "@/components/Modal/Modal";
import Form from "@/components/Form/Form";

interface AuthorPageProps {
    title: string;
    text: string;
  }


const AuthorPage: React.FC<AuthorPageProps> = ({ title, text }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  // Sample data representing posts (replace this with your actual data fetching)
  const postsData = [
    { id: 1, title: 'Post 1', text: 'This is the first post.' },
    { id: 2, title: 'Post 2', text: 'This is the second post.' },
    { id: 3, title: 'Post 3', text: 'This is the third post.' },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <h1>Author page</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {postsData.map((post) => (
            <Grid xs="auto" key={post.id}>
              <Item>
              <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="blog img"
          height="140"
          src="/imgs/blogImg2.webp"
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
          <Button size="small" className='bg-green-500'><Link href={`/post/${post.id}`} passHref>Change post</Link></Button>
          <Button size="small" className='bg-green-800'>Learn More</Button>
        </CardActions>
      </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
        <Button size="large" className='bg-orange-800' onClick={toggleModal}>
          Add Post
        </Button>
        <Modal open={isModalOpen} onClose={toggleModal} >
        <Form/>
        </Modal>
      </Box>
    </>
  );
};

export default AuthorPage;
