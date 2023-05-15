import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { Typography, Container, Grid, Card, CardActionArea, CardMedia, CardContent} from '@material-ui/core';
import Navatar from './Navatar'
//import { Box, Button } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     paddingTop: theme.spacing(3),
//     paddingBottom: theme.spacing(3),
//   },
//   card: {
//     maxWidth: 345,
//     margin: theme.spacing(2),
//   },
//   media: {
//     height: 200,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
//   vol: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '300px',
//     position: 'relative',
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//       minHeight: 'auto',
//   }},

//   imageBox: {
//     width: '40%',
//     height: '100%',
//     position: 'relative',
//     overflow: 'hidden',
//     [theme.breakpoints.down('sm')]: {
//       width: '100%',
//       height: '200px',
//     },
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },

//   textBox: {
//     width: '60%',
//     padding: theme.spacing(4),
//     [theme.breakpoints.down('sm')]: {
//       width: '100%',
//     },
//   },

//   textheadingvol: {
//     color: '#000',
//     textAlign: 'center',
//     marginBottom: theme.spacing(2),
//     fontFamily: "Roboto",
//     fontWeight:900
//   },

//   textvol:{
//     color: '#000',
//     textAlign: 'center',
//     marginBottom: theme.spacing(2),
//     fontFamily: "Arial",

//   },

//   buttonvol:{
//     marginTop: theme.spacing(2),
//   }
// }));

const Home = () => {
  // const classes = useStyles();

  return (
  <div>
      <Navatar />
      {/* <div className={classes.root}>
      <Container maxWidth="lg">
        <br></br><br></br>
  
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.news-medical.net/image.axd?picture=2020%2F10%2Fshutterstock_603317201-1.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Blood Types
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Learn more about the different blood types and their compatibility.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://itsengg.edu.in/Eligibility-for-IAS.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Eligibility
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Find out if you're eligible to donate blood and learn about common restrictions.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.thelifeyoucansave.org/wp-content/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Make A Financial Donation
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Change lives with your gift.<br></br> Donate Now
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          
          
        </Grid>
      </Container>
       </div>
       <div className='volunteer'>
       <Box className={classes.vol}>
      <Box className={classes.imageBox}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/978/288/original/volunteer-collecting-blood-donation-free-vector.jpg"
          alt="Volunteer"
          className={classes.image}
        />
      </Box>
      <Box className={classes.textBox}>
        <Typography className={classes.textheadingvol} variant="h3" >
        Volunteers Needed to Help Blood Donations
        </Typography>
        <Typography className={classes.textvol} variant='h6'>
        Volunteer opportunities include supporting blood donations and delivering much-needed services to your community.
        </Typography>
        <Button className={classes.buttonvol} variant="contained" color="primary">
          Learn More
        </Button>
      </Box>
    </Box>
       </div> */}
       </div>
       )
      }
export default Home;