import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import { AuthContext } from '../../context/auth/AuthContext';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      position: 'fixed',
      bottom: '1px',
      zIndex: theme.zIndex.drawer + 2
    }
  })
);

const Footer: React.FC = props => {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <AuthContext.Consumer>
      {({ authenticated }) => {
        if (!authenticated) {
          return null;
        } else {
          return (
            <Grid container direction="column" className={classes.container}>
              <Grid item justify="center">
                <Paper square>
                  <Tabs
                    centered
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                  >
                    <Tab label="News Feed" />
                    <Tab label="Chats" />
                    <Tab label="Friends" />
                    <Tab label="Profile" />
                    <Tab label="Contact" />
                  </Tabs>
                </Paper>
              </Grid>
            </Grid>
          );
        }
      }}
    </AuthContext.Consumer>
  );
};
export default Footer;
