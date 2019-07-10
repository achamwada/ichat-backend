import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Status } from '../../models/Request';
import ImageGallery from '../ImageGallery';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      minWidth: 345,
      margin: '10px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

const ChatItem: React.FC<{ status: Status }> = ({ children, status }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log('status.userID', status.userID);

  var d = new Date();
  // d.toLocaleString();       // -> "2/1/2013 7:37:08 AM"
  // d.toLocaleDateString();   // -> "2/1/2013"
  // d.toLocaleTimeString()

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Recipe"
            className={classes.avatar}
            src={status.userID.avatar}
          />
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${status.userID.first_name}  ${status.userID.last_name}`}
        subheader={moment(status.date_created).format('YY-DD-MM')}
      />
      <CardMedia
        className={classes.media}
        image={status.image[0].url ? status.image[0].url : ''}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {status.status.length < 200
            ? status.status.slice(1, 200)
            : status.status.slice(1, 200) + '...'}
        </Typography>
      </CardContent>
      {status.status.length > 200 ? (
        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      ) : (
        ''
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{status.status}</Typography>
          {status.image.length > 1 && <ImageGallery images={status.image} />}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ChatItem;
