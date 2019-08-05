import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FriendStructure } from '../models/Request';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
      margin: theme.spacing(3)
    },
    faIcon: {
      fontSize: 18
    }
  })
);

interface Props extends RouteComponentProps<any> {
  friend: FriendStructure;
}

const FriendItem: React.FC<Props> = ({ history, friend }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={friend.related_user.avatar}
          title="Contemplative Reptile"
          onClick={() => {
            history.push('/profile');
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {friend.related_user.first_name +
              ' ' +
              friend.related_user.last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {friend.related_user.bio && friend.related_user.bio.slice(0, 100)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" color="primary">
          {friend.related_user.email_address}
        </Button>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => {
            history.push('/inbox');
          }}
        >
          Chat
          <FontAwesomeIcon className={classes.faIcon} icon={faCommentDots} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default withRouter(FriendItem);
