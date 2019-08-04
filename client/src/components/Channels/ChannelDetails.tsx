import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Channel } from '../../store/types/Channel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    },
    fab: {
      margin: theme.spacing(1)
    }
  })
);

interface Props extends RouteComponentProps<any> {
  channelData: Channel;
}
const ChannelDetails: React.FC<Props> = props => {
  const classes = useStyles({});
  //props.channelData;
  const { channelData, history } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={channelData.avatar}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {channelData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {channelData.description.length > 100
              ? channelData.description.slice(1, 120) + '...'
              : channelData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Fab
          color="primary"
          aria-label="edit"
          className={classes.fab}
          onClick={() => history.push('/channel/' + channelData._id)}
        >
          <Icon fontSize="small">edit_icon</Icon>
        </Fab>
        <IconButton aria-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withRouter(ChannelDetails);
