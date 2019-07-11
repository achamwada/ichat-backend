import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

const ProfileCoverSlider = props => {
  return (
    <StyleRoot>
      <Coverflow
        displayQuantityOfSide={2}
        navigation
        infiniteScroll
        enableHeading
        media={{
          '@media (max-width: 900px)': {
            width: '900px',
            height: '100px'
          },
          '@media (min-width: 900px)': {
            width: '100%',
            height: '250px'
          }
        }}
      >
        <img
          src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/32207577_1824098984322688_2172941637150310400_o.jpg?_nc_cat=110&_nc_oc=AQkdy9FEDUNxcvWB6ninyuxob_MX7pREPvZ6vhhbIzDHOjusU_aH7I_nJCRrgMrSe54nCAdclgprszI_vgq6Lu-F&_nc_ht=scontent-lhr3-1.xx&oh=a95342c3df6934e93974cf2eac499d82&oe=5DA685FD"
          alt="Album one"
          data-action="https://facebook.github.io/react/"
        />
        <img
          src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/32214979_1824098597656060_6553665243774451712_o.jpg?_nc_cat=106&_nc_oc=AQmkxMekwZbeQZSRK6x5x8vd53cxO3uIRc2ZgNzlcsqF5BnE1RWxL1lH4J-RuqXItHDJc-l3JPW3pJhIZcwVg8L5&_nc_ht=scontent-lhr3-1.xx&oh=6bdc1d71b8f13d0e3860214ce49387e5&oe=5DA298AD"
          alt="Album two"
          data-action="http://passer.cc"
        />
        <img
          src="https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/16107088_1272287072866210_2867815069445552937_o.jpg?_nc_cat=103&_nc_oc=AQk2JYalhvcR6Yx78UCjyJwmClj2Ypl6S72EA90fZuTGYiUuUyk9FtH9H16tnID9AJJ132nZ6OPPK2l3i_VepPhx&_nc_ht=scontent-lhr3-1.xx&oh=4ff53b10e541eddbd3fe6774be940db1&oe=5DAD8CB3"
          alt="Album three"
          data-action="https://doce.cc/"
        />
        <img
          src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/995555_567804409981150_1107203167_n.jpg?_nc_cat=109&_nc_oc=AQk-MIRZan8lsr2i5qMrzPA1CZPVTe9hhhEZE0yqLBTYUQnDQ2EzmWf58LmXIg3EOqwQzi1dCQ34AL5JHGoseXDt&_nc_ht=scontent-lhr3-1.xx&oh=6d6b5e4b08c9fd5f4a0d102e84e7ec89&oe=5DAEF061"
          alt="Album four"
          data-action="http://tw.yahoo.com"
        />
        <img
          src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/297643_172226439538951_1822902739_n.jpg?_nc_cat=103&_nc_oc=AQnmBvD7J1WUFKUDdctg8wYFvqWTFGyGGW8KIFh2KNOcyOfUhiG1GAnZ7ZYqgarXXyjcCzokR91Ov72hLFqGo8q-&_nc_ht=scontent-lhr3-1.xx&oh=497aff2e54b13b506ebcba2d48966647&oe=5DAC2722"
          alt="Album four"
          data-action="http://tw.yahoo.com"
        />
        <img
          src="https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/465579_371665096261750_231262716_o.jpg?_nc_cat=108&_nc_oc=AQnzb8G8NqTjcNGFh4Ndl9IryQBMy7GLLRqZQ5R--VRfHTBtiGeVP1Enqe7kGHlQPQWctohRDScF9vh0n9aZpLv1&_nc_ht=scontent-lhr3-1.xx&oh=810b1951b579b9bc39b4bb65da8421ff&oe=5DC12125"
          alt="Album four"
          data-action="http://tw.yahoo.com"
        />
      </Coverflow>
    </StyleRoot>
  );
};

export default ProfileCoverSlider;
