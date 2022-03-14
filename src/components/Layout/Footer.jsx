import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

  footerBar: {
    background: 'linear-gradient(45deg, #000000 30%, #D39D38 70%)',
    textAlign: 'center',
    height: 60,
    paddingTop: 35,
  },

  footerInfo: {
    color: '#fff',
  }

});

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footerBar}>
      <div className={classes.footerInfo}>
            Copyright &copy; 2022, Van Tran     
      </div>
    </footer>
  )
}

export default Footer