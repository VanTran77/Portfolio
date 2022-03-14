import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles({
  a: {
    height: window.innerHeight-320,
    fontSize: 30,
    margin: 30,
    paddingLeft: 100,
    marginBottom: 150,
  },
  li: {
    marginBottom: 15,
  }
});
function Portfolio() {
  const classes = useStyles();
  return (
    <div className={classes.a}>
      <Grow timeout={1000} in={true}>
        <ul>
          <Grow timeout={1000} in={true}><li className={classes.li}><a href="https://github.com/VanTran77/Full-Stack-React-Nodejs-Community-Project" target='_blank'>Full Stack MERN Community Project</a></li></Grow>
          <Grow timeout={1000} in={true}><li className={classes.li}><a href="https://github.com/VanTran77/React-Github" target='_blank'>React Github</a></li></Grow>
          <Grow timeout={1500} in={true}><li className={classes.li}><a href="https://github.com/VanTran77/React-Country-Info" target='_blank' >React Country Information</a></li></Grow>
          <Grow timeout={2000} in={true}><li className={classes.li}><a href="https://github.com/VanTran77/Nodejs-Impact-Week-Project" target='_blank'>Nodejs Community</a></li></Grow>
          <Grow timeout={2500} in={true}><li className={classes.li}><a href="https://github.com/VanTran77/Nodejs-Article" target='_blank'>Nodejs Article </a></li></Grow>
          <Grow timeout={3000} in={true}><li className={classes.li}><a href="https://github.com/VanTran77/Facebook-Challenge" target='_blank'>Nodejs Facebook</a></li></Grow>
          <Grow timeout={3500} in={true}><li className={classes.li}><a href="https://github.com/VanTran77/jQuery-Tenor-Gif" target='_blank'>jQuery Tenor-Gif</a></li></Grow>
          <Grow timeout={4000} in={true}><li className={classes.li}><a href="https://github.com/VanTran77/JavaScript--Pomodoro-Clock" target='_blank'>Javascript Pomodoro Clock</a></li></Grow>
          <Grow timeout={4500} in={true}><li className={classes.li}><a href="https://github.com/VanTran77/JavaScript--Calculator" target='_blank'>Javascript Calculator</a></li></Grow>
        </ul>
      </Grow>
    </div>
  )
}

export default Portfolio
