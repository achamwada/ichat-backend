import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/Inbox';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       backgroundColor: theme.palette.background.paper,
//       marginBottom: '20px'
//     }
//   })
// );

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const SettingSideBar: React.FC = props => {
  //const classes = useStyles();

  return (
    <Fragment>
      <Typography
        variant="h5"
        component="h3"
        style={{ padding: '1rem', backgroundColor: '#3f51b5', color: '#fff' }}
      >
        Settings
      </Typography>
      <List component="nav" aria-label="Main mailbox folders">
        <ListItem button component={Link} to="/chats">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Chats" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="Secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </Fragment>
  );
};

export default SettingSideBar;
