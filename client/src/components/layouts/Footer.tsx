import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';

const Footer: React.FC = props => {
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <Paper square>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Tabs
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
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Footer;
