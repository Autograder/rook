import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';

const useStyles : any = makeStyles((theme: any) => ({
  colorPrimary: {
    color: 'black',
    fontSize: 2
  }
}));

const Hidden : React.FC = () => {
  const style = useStyles();
  return (
    <Typography classes={style} color='primary'>
      <Link href='/secret/halloffame' underline='none'>click me!</Link>
    </Typography>
  );
}

export default Hidden;