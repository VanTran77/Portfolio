import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Progress from './Progress';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(5),
        padding: theme.spacing(2),
        width: theme.spacing(27),
        height: theme.spacing(50),
      },
    },
  }),
);

function Skills(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={10}>
        <div className="container">
          <p>HTML</p>
          <Progress totalProgress={90} />
          <p>CSS</p>
          <Progress totalProgress={90} />
          <p>JavaScript</p>
          <Progress totalProgress={90} />
          <p>jQuery</p>
          <Progress totalProgress={85} />
          <p>Boostrap</p>
          <Progress totalProgress={90} />
        </div>
      </Paper>
      <Paper elevation={10}>
        <div className="container">
          <p>React</p>
          <Progress totalProgress={90} />
          <p>Nodejs</p>
          <Progress totalProgress={90} />
          <p>Git/Github</p>
          <Progress totalProgress={85} />
          <p>MongoDB</p>
          <Progress totalProgress={85} />
          <p>SQL Server</p>
          <Progress totalProgress={85} />
        </div>
      </Paper>
      <Paper elevation={10}>
        <div className="container">
          <p>Active Directory</p>
          <Progress totalProgress={95} />
          <p>Mail Exchange Server</p>
          <Progress totalProgress={95} />
          <p>File Server</p>
          <Progress totalProgress={95} />
          <p>Microsoft Azure Cloud</p>
          <Progress totalProgress={90} />
          <p>Windows Server 2012/2016</p>
          <Progress totalProgress={95} />
        </div>
      </Paper>
      <Paper elevation={10}>
        <div className="container">
          <p>Virtual Server VMWare/Hyper-V</p>
          <Progress totalProgress={95} />
          <p>Mail Exchange Server</p>
          <Progress totalProgress={95} />
          <p>Network WAN/LAN/VPN</p>
          <Progress totalProgress={95} />
          <p>Firewall ASA / Fortinet </p>
          <Progress totalProgress={90} />
          <p>Backup solution</p>
          <Progress totalProgress={95} />
        </div>
      </Paper>
    </div>
  )
}

export default Skills
