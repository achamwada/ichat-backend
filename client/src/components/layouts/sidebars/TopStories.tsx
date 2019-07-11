import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
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
  const classes = useStyles();

  return (
    <Fragment>
      <Typography
        variant="h5"
        component="h3"
        style={{ padding: '1rem', backgroundColor: '#3f51b5', color: '#fff' }}
      >
        Top Stories
      </Typography>
      <List>
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
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/534485_371667242928202_1009866150_n.jpg?_nc_cat=101&_nc_oc=AQlm0vB47hjfAsUDU_t2LmgaHH2c0rQ70CFT_na4NQJx42qrrtLNVaMkihwL985V3qCYD56BQsFxajJANGYoJu6r&_nc_ht=scontent-lhr3-1.xx&oh=a148e2ff5b2e9071e1abceba52d5a935&oe=5DA7B585"
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
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/31670926_1814992111900042_3604329790229708800_o.jpg?_nc_cat=105&_nc_oc=AQmDWVTRnZaqLovqlmPdBybYwahgeZWFrr4INupXtq9h1CUer3Ogkp-Nn5rXfASZ8B-2FpQOpb9AaZ8Qf1OVZSeh&_nc_ht=scontent-lhr3-1.xx&oh=d513e4d384c5784b28fcc9d3fe556c60&oe=5DB2B9F1"
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
      </List>
    </Fragment>
  );
}

Row.propTypes = {
  index: PropTypes.number,
  style: PropTypes.object
} as any;

const TopStories: React.FC = props => {
  const classes = useStyles();
  return (
    // <div className={classes.root}>

    <FixedSizeList height={400} width="100%" itemSize={5} itemCount={1}>
      {Row}
    </FixedSizeList>
    // </div>
  );
};

export default TopStories;
