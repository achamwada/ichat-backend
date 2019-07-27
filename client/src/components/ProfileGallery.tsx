import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450
    }
  })
);

interface GalleryImage {
  src: string;
  title: string;
}
const ProfileGallery: React.FC<Array<GalleryImage>> = galleryImages => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {galleryImages.map((image, key) => (
          <GridListTile key={key} cols={Math.floor(Math.random() * 5) + 1 || 1}>
            <img src={image.src} alt={image.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ProfileGallery;
