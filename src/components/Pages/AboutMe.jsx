import React from 'react';
import {createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(5),
        width: theme.spacing(50),
        height: theme.spacing(60),
      },
    },
    paper: {
      padding: theme.spacing(2),
      background: 'linear-gradient(45deg, #8e9eab 15%, #eef2f3 5%)',
    },
    span: {
      paddingLeft: theme.spacing(2),
    }
  }),
);

function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slide timeout={1500} direction="up" in={true} mountOnEnter unmountOnExit>
        <Paper className={classes.paper} elevation={6}>
        <h3>About Me</h3>
        <p>I am Van Tran. I am an enthusiastic, responsible, reliable, self-motivated and hard working person. I am a mature team worker and adaptable to all challenging situations.</p>
        <p>I am always willing to learn new skills. I am able to work well under pressure and adhere to strict deadlines. I like web development and this makes me happy.</p>
        <p>I have 10+ years experiences in IT field such as Networking, IT System, Security, Helpdesk and I graduated Bachelor's degree in Computer Science in Vietnam. </p>
        <p>If you want to know more about me feel free, please use my information in right side of the page and make contact with me.</p>
        </Paper>
      </Slide>
      <Slide timeout={3000} direction="up" in={true} mountOnEnter unmountOnExit>
        <Paper className={classes.paper} elevation={6}>
        <h3>Basic information</h3>
        <p><MailIcon color="primary"/><span className={classes.span}>tavan.it@gmail.com</span></p>
        <p><PhoneIcon color="primary"/><span className={classes.span}>(+31) 611291926</span></p>
        <p><HomeIcon color="primary"/><span className={classes.span}>Dordrecht, The Netherlands</span></p>
        <p><LanguageIcon color="primary"/><span className={classes.span}>English, Vietnamese & Chinese(Cantonese)</span></p>
        </Paper>
      </Slide>
    </div>
  )
}

export default AboutMe
