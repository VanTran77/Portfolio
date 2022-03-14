import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WebDevImg from '../Assets/WebDev.png'
import { Grow } from '@material-ui/core';
import Microsoft from '../Assets/microsoft.jpg'
import CCNA from '../Assets/CCNA.jpg'
import Bachelor from '../Assets/Bachelor.jpg'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      margin: 50,
    },
    card: {  
      margin: 1,
      width: 290,
    },
    cardContent: {
      maxWidth: 320,  
    },
    media: {
      height: 100,
      paddingTop: '46%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    courseName: {
      fontWeight: 600,
    }
  }),
);

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };

  return (
    <div className="root">
      <div className={classes.root}>
        <Grow timeout={1000} in={true}>
          <Paper className={classes.card} elevation={6}>
            <Card >
              <CardMedia
                className={classes.media}
                image={WebDevImg}
                title="Web development"
              />
              <CardContent>
                <Typography variant="body2" component="p" className={classes.courseName}>
                Full Stack Web Developer
                </Typography>
                <Typography variant="body2" component="p">
                  Dec 2021 - Mar 2022
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.cardContent}>
                  <Typography paragraph>
                    Matrix Master Academy -  Rotterdam The Netherlands
                  </Typography>
                  <Typography paragraph>
                    This Program is four months intensive program that divided in 2 sections. I have learned the concept of self-sufficiency. First part was coverd Front-End (Html, CSS, Javascript, Bootstrap & jQuery) whereas the second was full stack MERN (Reactjs, Nodejs & MongoDB)
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Paper>
        </Grow>

        <Grow timeout={2000} in={true}>
        <Paper className={classes.card} elevation={6}>
          <Card >
            <CardMedia
              className={classes.media}
              image={Microsoft}
              title="MCITP-EA"
            />
            <CardContent>
              <Typography variant="body2" component="p" className={classes.courseName}>
                MCITP-EA
              </Typography>
              <Typography variant="body2" component="p">
                2010
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded2,
                })}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
              <CardContent className={classes.cardContent}>
                <Typography paragraph>Microsoft Certified IT Professional Enterprise Administrator</Typography>
                <Typography paragraph>
                
                </Typography>
                <Typography paragraph>
                
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Paper>
        </Grow>

        <Grow timeout={2000} in={true}>
        <Paper className={classes.card} elevation={6}>
          <Card >
            <CardMedia
              className={classes.media}
              image={CCNA}
              title="CCNA"
            />
            <CardContent>
              <Typography variant="body2" component="p" className={classes.courseName}>
                CCNA
              </Typography>
              <Typography variant="body2" component="p">
                2010
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded3,
                })}
                onClick={handleExpandClick3}
                aria-expanded={expanded3}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded3} timeout="auto" unmountOnExit>
              <CardContent className={classes.cardContent}>
                <Typography paragraph>Cisco Certified Network Associate</Typography>
                <Typography paragraph>
                
                </Typography>
                <Typography paragraph>
                
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Paper>
        </Grow>

        <Grow timeout={3000} in={true}>
          <Paper className={classes.card} elevation={6}>
            <Card >
              <CardMedia
                className={classes.media}
                image={Bachelor}
                title="Bachelor in Computer Science"
              />
              <CardContent>
                <Typography variant="body2" component="p" className={classes.courseName}>
                Bachelor in Computer Science
                </Typography>
                <Typography variant="body2" component="p">
                  Sep 1997 - Jan 2002
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded4,
                  })}
                  onClick={handleExpandClick4}
                  aria-expanded={expanded4}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded4} timeout="auto" unmountOnExit>
                <CardContent className={classes.cardContent}>
                  <Typography paragraph>Sep 1997 - Jan 2002</Typography>
                  <Typography paragraph>
                  Open university
                  </Typography>
                  <Typography paragraph>
                  Bachelor's degree in Computer Science of Ho Chi Minh City Open University in Vietnam
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Paper>
        </Grow>
      </div>
    </div>
  );
}

