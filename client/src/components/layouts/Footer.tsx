import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

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
    <Grid container direction="column" className={classes.container}>
      <Grid item sm={12}>
        <Paper square style={{ width: '100%' }}>
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
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Footer;
