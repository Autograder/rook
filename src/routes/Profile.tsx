import React from 'react';
import Navbar from '../components/Navbar';
import TicketHistory from '../components/TicketHistory';
import ProfileSection from '../components/ProfileSection';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/ProfileStyle';

export default function Profile() {
  const theme = OurTheme.theme;
  const inverseTheme = OurTheme.inverseTheme;
  const classes = Styles.useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue)
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function TabPanel(props:any) {
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

  function a11yProps(index:any) {
    return {
      id: `simple-tabpanel-${index}`,
      'aria-controls': `simple-tab-${index}`,
    };
  }

	return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <h2 className={classes.title}>Profile</h2>
        <Tabs value={value} onChange={handleChange} aria-label="Vertical tabs example">
          <Tab className={classes.tab} label="Profile" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Feedback" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Ticket History" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ProfileSection/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TicketHistory/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </ThemeProvider>
    </div>
  );
}