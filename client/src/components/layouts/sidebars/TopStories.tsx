import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: 'inline'
    }
  })
);

function Row(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

const TopStories: React.FC = props => {
  const classes = useStyles();

  return (
    <FixedSizeList height={400} width={360} itemSize={46} itemCount={200}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/15995029_1301455226587069_2454692373893495456_o.jpg?_nc_cat=105&_nc_oc=AQnt0GyNQu8Prmtk74B9AvSBo_6v8ZyMU4TbnztXkepDZmHc16bm5CF-i4uBx7lnXWTDPoYglnD_ucN5QgrnBZ73&_nc_ht=scontent-lhr3-1.xx&oh=8025365dc264ca274d16b9cff14b73d7&oe=5DA78BBC"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/201781_389281711137763_1040705173_o.jpg?_nc_cat=111&_nc_oc=AQlu32dSj2FRQ8cnJCsC_FA-YOW2-mRiWMExNcs8FACypyJ9aP7iFrDYwgVpo3QjRo-_EanJai1RYisgDkTzhrxd&_nc_ht=scontent-lhr3-1.xx&oh=e3c1be06e937095e3c38f990973aa35d&oe=5DA35BC8"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/31961347_1821569647908955_8420909169132961792_o.jpg?_nc_cat=109&_nc_oc=AQks6KmU7ri1GHbt5ZdxFT2kb0JnOzH9Bu_DwEW2jLgEfCXlzDDwip-9RqhTdPVvIOY6ybJw8akscKzTv2mx8Dyi&_nc_ht=scontent-lhr3-1.xx&oh=dc83b364c15ae524d40ed0f1d38ac668&oe=5DB4C631"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </FixedSizeList>
    // <List className={classes.root}>

    // </List>
  );
};

export default TopStories;
