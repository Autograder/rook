import React from 'react';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '@material-ui/styles';
import { Link, Typography } from '@material-ui/core';
import OurTheme from '../style/Theme';
import Styles from '../style/HallOfFameStyles';

const HallOfFame: React.FC = () => {
  const theme = OurTheme.theme;
  const style = Styles.useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <br/>
        <Typography classes={style} color='primary'>
          This project has been a multi-generational undertaking with tons of contributors, and
          we'd like to shout out a few of them via their Github usernames (click them!):
          <ul>
            <li><Link href='https://github.com/demc' underline='hover' target='_blank'>@demc</Link> for reviving the site and pushing towards the current version.</li>
            <li><Link href="https://github.com/kbuzsaki" target='_blank' underline='hover'>@kbuzsaki</Link> and
            <Link href='https://github.com/kdhuynh' target='_blank' underline='hover'> @kdhuynh</Link> for their leadership on the Play rewrite.</li>
            <li><Link href='https://github.com/chenboy3' target='_blank' underline='hover'>@chenboy3</Link>,
            <Link href='https://github.com/maxwell-bland' target='_blank' underline='hover'> @maxwell-bland</Link>,
            <Link href='https://github.com/alxyzc' target='_blank' underline='hover'> @alxyzc</Link>, and
            <Link href='https://github.com/kraylie' target='_blank' underline='hover'> @kraylie</Link> for taking the reigns afterwards.</li>
            <li><Link href='https://github.com/nate-browne' target='_blank' underline='hover'>@nate-browne</Link> for heading the rewrite that led to the site you see now.</li>
            <li>Gary for letting us work on this project.</li>
          </ul>
          Through your vision and hard work (with the contributions of many others!), we've gone from whiteboard
          queues to digital systems and given quite a few people a chance to try out some web development, and
          that opportunity truly is one we're grateful for. :)
        </Typography>
        <br/>
        <Typography align='center'>
          <Link href='/'>Back home</Link>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default HallOfFame;
