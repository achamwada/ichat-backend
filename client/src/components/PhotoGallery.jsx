import React, { Fragment } from 'react';
import Gallery from 'react-grid-gallery';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      width: '100%',
      height: '100%',
      padding: theme.spacing(3)
    }
  })
);

const IMAGES = [
  {
    src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
    thumbnail:
      'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    caption: '8H (gratisography.com)'
    //thumbnailCaption: "8H"
  },
  {
    src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
    thumbnail:
      'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 190,
    caption: '286H (gratisography.com)'
    //thumbnailCaption: "286H"
  },
  {
    src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    thumbnail:
      'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 148,
    caption: '315H (gratisography.com)'
    //thumbnailCaption: "315H"
  },
  {
    src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
    thumbnail:
      'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: '201H (gratisography.com)'
    //thumbnailCaption: "201H"
  },
  {
    src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
    thumbnailWidth: 248,
    thumbnailHeight: 320,
    caption: 'Big Ben (Tom Eversley - isorepublic.com)'
    //thumbnailCaption: "Big Ben"
  },
  {
    src: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg',
    thumbnail:
      'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 113,
    caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)'
    //thumbnailCaption: (<span style={{color: "darkred"}}>Red Zone - <i>Paris</i></span>)
  },
  {
    src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
    thumbnail:
      'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
    thumbnailWidth: 313,
    thumbnailHeight: 320,
    caption: 'Wood Glass (Tom Eversley - isorepublic.com)'
    //thumbnailCaption: "Wood Glass"
  },
  {
    src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
    thumbnail:
      'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)'
    //thumbnailCaption: "Flower Interior Macro"
  }
];

const PhotoGallery = () => {
  const classes = useStyles();
  return <Gallery images={IMAGES} />
};

export default PhotoGallery;
