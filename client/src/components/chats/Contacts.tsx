import { Paper, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //width: '100%',
      //maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      //paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      height: '70vh',
      borderBottom: 'solid #F0F0F0 1px'
    }
  })
);

const Contacts: React.FC = props => {
  const classes = useStyles({});
  //const [checked, setChecked] = React.useState([1]);

  /*const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };*/

  return (
    <Paper className={classes.root}>
      <Typography
        variant="h5"
        component="h3"
        style={{ padding: '1rem', backgroundColor: '#3f51b5', color: '#fff' }}
      >
        Contacts
      </Typography>

      <List dense className={classes.root}>
        {[
          'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/66068732_2247666458684863_1952620844341526528_o.jpg?_nc_cat=104&_nc_oc=AQmIn5-RSZID8e-G82-lNMq62Nd2mq2NvQLbNZ_OH-rbJOz4tpJdf9woXQn4VJH8WCZPHEBZrFFCfdbHkwdPGuf4&_nc_ht=scontent-lhr3-1.xx&oh=be5bd590a000c54a8680510a8e10e5f0&oe=5DBCE5EC',
          'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/52387491_10157183587348023_5043878273797324800_n.jpg?_nc_cat=110&_nc_oc=AQmajlRUribofm1BkmzUhQyt_SC_dMx0s3KXmDx1vjD9Lhhk-dJVhQLFqrp2upaSiv4zOXf-Z6uqa-JHNRdZCSUI&_nc_ht=scontent-lhr3-1.xx&oh=b1971259cdcb87b555fed607a21e8c5e&oe=5DBEBD0E',
          'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/43255920_10156922173749015_8850931564075286528_n.jpg?_nc_cat=100&_nc_oc=AQnCRVCC1L1Z-Ed-HR6JN9iNZCCDoipnWh3VKeVjD8CXwL5JvGQzyGy6w2GFFE42igZujiF4P9dPe75LK2DW4QfC&_nc_ht=scontent-lhr3-1.xx&oh=136ff2623b2826dbc40857c3b387aa40&oe=5DAB1BBC',
          'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/65419128_10219124521765568_7514508608244023296_n.jpg?_nc_cat=108&_nc_oc=AQlFrTHSaVyslUWjMGjf7PIE8g3zniQutuOH1vtSNTJNijD6lTWA0VGxLLSgXAw_Dch5kRnxLwSEj9c6DciiEfVk&_nc_ht=scontent-lhr3-1.xx&oh=19ffcdbf8bf1de39f2d8c41fc6942d7a&oe=5DC3E01B'
        ].map(imageIcon => {
          const labelId = `checkbox-list-secondary-label-${imageIcon}`;
          return (
            <ListItem key={imageIcon} button>
              <ListItemAvatar>
                <Avatar alt={`Avatar n°`} src={imageIcon} />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item`} />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default Contacts;
