import React from 'react'
import { makeStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    link: {
      textDecoration: 'none',
      color: '#fff',
    },
    title: {
      flexGrow: 1,
      margin: 30,
    },
    navBar: {
      background: 'linear-gradient(45deg, #000000 30%, #D39D38 70%)',
    }
  }));

function Header() {
    const classes = useStyles();
    console.log(classes);
    return (
        <header>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.navBar}>
              <Typography variant="h4" className={classes.title}>
              <Link className={classes.link} to='/'>MY PORTFOLIO</Link>
              </Typography>
                  <a href="http://linkedin.com/in/van-tran77" target='_blank' className="fa fa-linkedin"></a>
                  <a href="https://github.com/VanTran77" target='_blank' className="fa fa-github"></a>
              <Button color="secondary" variant="container"><Link className={classes.link} to='/About'>About Me</Link></Button>
              <Button color="inherit"><Link className={classes.link} to='/Experience'>Experience</Link></Button>
              <Button color="inherit"><Link className={classes.link} to='/Skills'>Skills</Link></Button>
              <Button color="inherit"><Link className={classes.link} to='/Portfolio'>Portfolio</Link></Button>
              <Button color="inherit"><Link className={classes.link} to='/Education'>Education</Link></Button>
              <Button color="inherit"><Link className={classes.link} to='/Contact'>Contact</Link></Button>
            </Toolbar>
          </AppBar>
        </div>
      </header>
    )
}

export default Header