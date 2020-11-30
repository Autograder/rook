import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import CourseSettingsTab from '../components/CourseSettingsTab';
import StudentPageTab from '../components/StudentPageTab';
import StaffPageTab from '../components/StaffPageTab';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/CourseSettingsStyle';
import { Tabs, Tab, Box, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

export default function CourseSettings() {
    const {course_id} = useParams();
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        // get all the course info from course id and set it yeet
        console.log(course_id);
    })

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

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
            <Navbar />
            <div className={classes.root}>
                <ThemeProvider theme={theme}>
                    <h2 className={classes.title}>Course Settings</h2>
                    <h1>{course_id}</h1>
                    <Tabs value={value} onChange={handleChange} aria-label="Vertical tabs example">
                        <Tab className={classes.tab} label="Settings" {...a11yProps(0)} />
                        <Tab className={classes.tab} label="Staff" {...a11yProps(1)} />
                        <Tab className={classes.tab} label="Students" {...a11yProps(2)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <CourseSettingsTab />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <StaffPageTab />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <StudentPageTab />
                    </TabPanel>
                </ThemeProvider>
            </div>
        </div>
    );

}