import React from 'react';
import bg1 from '../../components/Assets/bg1.jpg'
import AvatarImage from '../../components/Assets/avatar.jpg'
import CV from '../../components/Assets/CV.pdf';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Grow } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    height: 550,
  },
  avatar: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  p:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bolder',
    paddingLeft: 20,
    margin: 5,
  },
  p1: {
    position:'absolute',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bolder',
    marginTop: 100,
    marginRight: 20,
    paddingLeft: 1150,
  },
  button: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    margin: 20,
    background: 'linear-gradient(45deg, #f46b45 30%, #eea849 70%)',
  },
});

function Homepage() {
  const classes = useStyles();
  return (
    <div >
    <Grid container justify="center">
      <Grid item xs={12}>
        <Card >
          <CardMedia className={classes.card} image={bg1}>
              <div className={classes.p1}>
                <Grow timeout={2500} in="true"><p>Enthusiastic</p></Grow>
                <Grow timeout={3000} in="true"><p>Responsible</p></Grow>
                <Grow timeout={3500} in="true"><p>Reliable</p></Grow>
                <Grow timeout={4000} in="true"><p>Self-motivated</p></Grow>
                <Grow timeout={4500} in="true"><p>Hard working</p></Grow>
                <Grow timeout={5000} in="true"><p>Teamwork</p></Grow>             
              </div>
            <Avatar className={classes.avatar} src={AvatarImage} alt="Avatar Image"/>
            <p className={classes.p}>Van Tran</p>
            <Button className={classes.button} variant="contained">
              <a className="btn btn-primary btn-sm aos-init aos-animate" href={CV} data-aos="zoom-in" data-aos-anchor="data-aos-anchor" download="">Download CV</a>
            </Button>
          </CardMedia>
        </Card>
      </Grid>
    </Grid>  
  </div>
  )
}

export default Homepage