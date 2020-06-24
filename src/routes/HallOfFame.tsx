import React from 'react';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '@material-ui/styles';
import { Link, Typography, Button } from '@material-ui/core';
import OurTheme from '../style/Theme';
import Styles from '../style/HallOfFameStyles';

const HallOfFame: React.FC = () => {
  const theme = OurTheme.theme;
  const classes = Styles.useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <div className={classes.center}>
           <Typography className={classes.title}>Hall of Fame</Typography>
        </div>
        <Typography className={classes.body} color='primary'>
          This project has been a multi-generational undertaking with tons of talented contributors, and
          we'd like to shout out a few of them via their Github accounts:
          <ul>
            <li><Link href='https://github.com/demc' underline='always' target='_blank'>@demc</Link> for reviving the site and pushing towards the current version.</li>
            <li><Link href="https://github.com/kbuzsaki" target='_blank' underline='always'>@kbuzsaki</Link> and <Link href='https://github.com/kdhuynh' target='_blank' underline='always'>@kdhuynh</Link> for their leadership on the Play rewrite.</li>
            <li><Link href='https://github.com/chenboy3' target='_blank' underline='always'>@chenboy3</Link>, <Link href='https://github.com/maxwell-bland' target='_blank' underline='always'>@maxwell-bland</Link>, <Link href='https://github.com/alxyzc' target='_blank' underline='always'>@alxyzc</Link>, and <Link href='https://github.com/kraylie' target='_blank' underline='always'>@kraylie</Link> for taking the reigns afterwards.</li>
            <li><Link href='https://github.com/nate-browne' target='_blank' underline='always'>@nate-browne</Link> for heading the rewrite that led to the site you see now.</li>
            <li>Gary Gillespie for letting us work on this project :)</li>
          </ul>
          Through your vision and hard work that led the contribution of many others, we've gone from whiteboard
          queues to digital systems, given quite a few people a chance to try out some web development, and made friends.
        </Typography>
        <div className={classes.center}>
          <Typography className={classes.text} color='primary'><b>That opportunity truly is one we're grateful for :)</b></Typography>
          <Link underline='none' href="/"><Button className={classes.button} variant="outlined" color="primary">Back Home</Button></Link>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default HallOfFame;
