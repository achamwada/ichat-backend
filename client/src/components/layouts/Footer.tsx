import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';

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

interface FooterMenu {
  text: string;
  link: string;
}

const Footer: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  const footerMenu: Array<FooterMenu> = [
    {
      text: 'News Feed',
      link: '/'
    },
    {
      text: 'Chats',
      link: '/chats'
    },
    {
      text: 'Friends',
      link: '/friends'
    },
    {
      text: 'Profile',
      link: '/profile'
    },
    {
      text: 'Contact',
      link: '/contact'
    }
  ];

  return (
    <AuthContext.Consumer>
      {({ authenticated }) => {
        if (!authenticated) {
          return null;
        } else {
          return (
            <Grid container direction="column" className={classes.container}>
              <Grid item>
                <Paper square>
                  <Tabs
                    centered
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                  >
                    {footerMenu.map(({ text, link }, index) => {
                      return (
                        <Tab
                          key={index}
                          label={text}
                          onClick={() => history.push(link)}
                        />
                      );
                    })}
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
export default withRouter(Footer);
