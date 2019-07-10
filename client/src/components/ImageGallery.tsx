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

interface Props {
  images: [
    {
      url: string;
    }
  ];
}
const ImageGallery: React.FC<Props> = ({ images }) => {
  const classes = useStyles();
  const getRandomSize = (): number => {
    return Math.floor(Math.random() * 3) + 1;
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map((image, index) => (
          <GridListTile key={index} cols={getRandomSize() || 1}>
            <img src={image.url} alt="image" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ImageGallery;
