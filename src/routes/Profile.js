import React, {useState, useContext} from 'react';
import Navbar from '../components/Navbar';
//  history and feedback depend on url param for class??
import TicketHistory from '../components/TicketHistory';
import TicketFeedback from '../components/TicketFeedback';
import ProfileSection from '../components/ProfileSection';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Typography, Collapse } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/ProfileStyle';
import Alert from '@material-ui/lab/Alert';
import {Context} from '../context/Context';

export default function Profile() {
  const theme = OurTheme.theme;
  const classes = Styles.useStyles();
  const [value, setValue] = React.useState(0);
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = useState(false);
  const {state: {user}} = useContext(Context);

  const [alertColor, setAlertColor] = React.useState('success');

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = (message, responseStatus) => {
    setMessage(message)
    setAlertColor(responseStatus === 200 ? 'success' : 'error')
    setOpen(true)
    setTimeout(() => { setOpen(false) }, 5000)
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tabpanel-${index}`,
      'aria-controls': `simple-tab-${index}`,
    };
  }

	return (
    <div>
        <ThemeProvider theme={theme}>
          <div className={classes.alert}>
            <Collapse in={open}>
                <Alert onClose={() => handleClose()} severity={alertColor}>{message}</Alert>
            </Collapse>
          </div>
          <div className={classes.root}>
              <h2 className={classes.title}>Profile</h2>
              <Tabs value={value} onChange={handleChange} aria-label="Vertical tabs example">
                <Tab className={classes.tab} label="Profile" {...a11yProps(0)} />
                <Tab className={classes.tab} label="Feedback" {...a11yProps(1)} />
                <Tab className={classes.tab} label="Ticket History" {...a11yProps(2)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <ProfileSection setOpen={setOpen} user={user} handleOpen={handleOpen}/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TicketFeedback/>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <TicketHistory/>
              </TabPanel>
          </div>
        </ThemeProvider>
      </div>
  );
}