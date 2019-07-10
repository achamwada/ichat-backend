import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Settings from './Settings';
import TopStories from './TopStories';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperWrapper: {
      margin: theme.spacing(3)
    }
  })
);

const LeftSideBar: React.FC = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper className={classes.paperWrapper}>
        <Settings />
      </Paper>
      <Paper className={classes.paperWrapper} style={{ position: 'sticky' }}>
        <TopStories />
      </Paper>
    </Fragment>
  );
};

export default LeftSideBar;
