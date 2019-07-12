import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%'
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
      {({ token, authenticated, data }) => {
        if (!authenticated) {
          return null;
        } else {
          return (
            <Grid container direction="row" className={classes.container}>
              <Grid item xs={12}>
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
