import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grow } from '@material-ui/core';
import DominosImage from '../Assets/DominosPizza.jpg'
import Plane from '../Assets/plane.png'
import Avon from '../Assets/avon.jpg' 
import Image2 from '../Assets/img2.jpg'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      margin: 50,
    },
    paper: {
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
    companyName: {
      fontWeight: 600,
    },
  }),
);
function Experience() {
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
    <div className={classes.root}>
      <Grow timeout={3000} in={true}>
        <Paper className={classes.paper} elevation={6}>
          <Card >
            <CardMedia
              className={classes.media}
              image={Image2}
              title="AI Power"
            />
            <CardContent>
              <Typography variant="p" component="p" className={classes.companyName}>
              AI Power Company (Vietnam)
              </Typography>
              <Typography variant="p" component="p">
              <br />
              </Typography>
              <Typography variant="body2" component="p">
              Position: IT Infrastructure & Helpdesk Leader
              </Typography>
              <Typography variant="body2" component="p">
                2019-2021
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
                  <p>Functions and Activities:</p>
                  <div>
                    <ul>
                      <li>Planning and building Network infrastructure.</li>
                      <li>Configuring and managing Firewall equipment.</li>
                      <li>Configuring site-to-site VPN tunnel over the Internet.</li>
                      <li>Installing and managing Domain Controller, File Server, Virtual Machine Server</li>
                      <li>Installing Servers, security tools and email system.</li>
                      <li>Enhancing system security by installing GPO, Antivirus Server.</li>
                      <li>Setting up laptops, desktops and softwares for end users.</li>
                      <li>Ensuring security of data and network access.</li>
                      <li>Providing advanced support special project requests, and serious problems.</li>
                      <li>Consulting IT security policies, procedures, documents and system integration.</li>
                      <li>Dealing with ISP, suppliers to provide network connection, purchase IT equipments.</li>
                    </ul>
                  </div>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Paper>
      </Grow>

      
      
      <Grow timeout={3000} in={true}>
        <Paper className={classes.paper} elevation={6}>
          <Card >
            <CardMedia
              className={classes.media}
              image={DominosImage}
            />
            <CardContent>
            <Typography variant="p" component="p" className={classes.companyName}>
            Vietnam Food and Beverage Service
            </Typography>
            <Typography variant="p" component="p" className={classes.companyName}>
            (Dominos Pizza-Burgerking-Popeyes)
            </Typography>
            <Typography variant="p" component="p" className={classes.companyName}>
            <br />
            </Typography>
            <Typography variant="body2" component="p">
            Position: Deputy IT Manager
            </Typography>
            <Typography variant="body2" component="p">
              2011-2019 
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
                <Typography paragraph>
                  <p>Functions and Activities:</p>
                  <div>
                    <ul>
                      <li>Responsible for all IT infrastructure including the procurement, monitoring, integration of all systems to achieve operation and stability.</li>
                      <li>Planning and building Network infrastructure for Head office, Branches and Restaurants.</li>
                      <li>Installing and managing Domain Controller, Additional Domain Controller, Multi-Domain, File Server, Microsoft Exchange Server, Antivirus Server, Virtual Machine Server.</li>
                      <li>Configuring and managing Cisco router, Switch and ASA Firewall.</li>
                      <li>Configuring site-to-site VPN tunnel over the Internet (Over 100 sites).</li>
                      <li>Establishing scheduled tasks to backup data and system for emergency disaster recovery.</li>
                      <li>Installing network tool to monitor multisite network.</li>
                      <li>Running regular check on network and data security.</li>
                      <li>Implementing centralization fingerprint access control and fingerprint time attendance system.</li>
                      <li>Collaborating with vendor and Marketing team to setup online ordering Website.</li>
                      <li>Working with ERP team to setup SAP server and go live SAP system.</li>
                      <li>Building up the capability of IT Department and other related departments by keeping them to stay up to date with digital technology developments and technology standards.</li>
                      <li>Implementing required applications by testing validity and reliability.</li>
                      <li>Reviewing user's requirements, analyzing and proposing change if required.</li>
                      <li>Enforcing technology-related to protect information assets of Company.</li>
                    </ul>
                  </div>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Paper>
      </Grow>

      <Grow timeout={3000} in={true}>
        <Paper className={classes.paper} elevation={6}>
          <Card >
            <CardMedia
              className={classes.media}
              image={Plane}
            />
            <CardContent>
            <Typography variant="p" component="p" className={classes.companyName}>
            Indochina Airlines (Vietnam)
            </Typography>
            <br />
            <br />
            <Typography variant="body2" component="p">
            Position: IT System & Network Manager
            </Typography>
            <Typography variant="body2" component="p">
              2008-2011 
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
                <Typography paragraph>
                  <p>Functions and Activities:</p>
                  <div>
                    <ul> 
                      <li>Setting up and maintaining IT security policies.</li>
                      <li>Planning and building Network infrastructure for Head office and Branch offices.</li>
                      <li>Configuring and managing Cisco router, switch.</li>
                      <li>Planning and implementing Active Directory.</li>
                      <li>Installing, managing and troubleshooting Domain Controller, File Server, Mail Exchange Server, Web Server, etc.</li>
                      <li>Implementing Firewall, Proxy and VPN connection</li>
                      <li>Enhancing system security by installing Antivirus, WSUS.</li>
                      <li>Managing and troubleshooting VoIP Contact Center for support Customer Service Center.</li>
                      <li>Managing support team to solve problem of software’s, hardware’s and records of assistance provided.</li>
                      <li>Assigning tasks to team members and direct the team efforts to quickly reproduce, diagnose and provide solutions to related issues.</li>
                      <li>Ensuring documents procedure are followed compliance policy.</li>
                      <li>Training and informing team member on a new IT system.</li>
                      <li>Dealing with ISP, suppliers to provide network connection and IT equipment’s.</li>
                    </ul>
                  </div>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Paper>
      </Grow>

      <Grow timeout={3000} in={true}>
        <Paper className={classes.paper} elevation={6}>
          <Card >
            <CardMedia
              className={classes.media}
              image={Avon}
            />
            <CardContent>
            <Typography variant="p" component="p" className={classes.companyName}>
            AVON Cosmetics Vietnam Company
            </Typography>
            <br />
            <br />
            <Typography variant="body2" component="p">
            Position: IT Specialist
            </Typography>
            <Typography variant="body2" component="p">
              2002-2008
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
                <Typography paragraph>
                  <p>Functions and Activities:</p>
                  <div>
                    <ul>
                      <li>Setting up, maintaining and improving network infrastructure.</li>
                      <li>Configuring and managing Cisco router, switch and firewall.</li>
                      <li>Configuring secure wireless devices such as Linksys, Cisco Access point.</li>
                      <li>Planning and implementing backup and recovery data, system for emergency disasters</li>
                      <li>Enhancing system security by installing Antivirus, WSUS.</li>
                      <li>Installing, managing, troubleshooting and monitoring Windows 2003 Domain Controller, DNS, DHCP, FTP, File Server, Mail Lotus Notes, Printer Server, Remote Desktop, NAT, Radius Server, Cisco VPN 3000 Series Concentrators.</li>
                      <li>Creating, changing and managing all emails account</li>
                      <li>Collaborating with global to install and go live Microsoft Dynamics Axapta system.</li>
                      <li>Supporting end-users to solve problem of other software’s, hardware’s and records of assistance provided.</li>
                      <li>Maintaining, repairing, monitoring PABX and billing system.</li>
                      <li>Collaborating with vendor to give solutions for setting up a new office.</li>
                    </ul>
                  </div>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Paper>
      </Grow>
    </div>
  )
}

export default Experience
