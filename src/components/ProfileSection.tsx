import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/ProfileSectionStyle';

export default function ProfileSection() {
  const theme = OurTheme.theme;
  const inverseTheme = OurTheme.inverseTheme;
  const classes = Styles.useStyles();

	return (
    <div>
      <ThemeProvider theme={theme}>

      </ThemeProvider>
    </div>
  );
}