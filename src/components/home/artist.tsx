import React from "react";
import "./style/artist.css";
import { admin } from "../../assets/index";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
// Define the types for the artists
interface Artist {
  name: string;
  images: {
    img1: string;
    img2: string;
  };
  description: string;
}

const artistsData: Artist[] = [
  {
    name: "CJCHIRAG X KALAM INK",
    images: {
      img1: admin,
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRr7okzZZ0BkJeeEUkIN92LCcXM-H5QuCZg&s",
    },
    description:
      "I've had the privilege of working alongside talented individuals from diverse creative backgrounds.",
  },
  {
    name: "CJCHIRAG X LOKA",
    images: {
      img1: admin,
      img2: "https://img.wynk.in/unsafe/200x200/filters:no_upscale():strip_exif():format(jpg)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1673594254869-Loka.jpg",
    },
    description:
      "I've had the privilege of working alongside talented individuals from diverse creative backgrounds.",
  },
  {
    name: "CJCHIRAG X KIDSHOT",
    images: {
      img1: admin,
      img2: "https://images.genius.com/72a9f903c916d3f33b843dee4c1352f3.1000x1000x1.jpg",
    },
    description:
      "I've had the privilege of working alongside talented individuals from diverse creative backgrounds.",
  },
  {
    name: "CJCHIRAG X BANDZO3RD",
    images: {
      img1: admin,
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4OlZrr_2r4pQlV2MhstQbb6AmVvIRvKnSw&s",
    },
    description:
      "I've had the privilege of working alongside talented individuals from diverse creative backgrounds.",
  },
  {
    name: "CJCHIRAG X D'EVIL",
    images: {
      img1: admin,
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBXDRp8uvWtfbnIcV2w1DpCvNJ8xytSW_OhQ&s",
    },
    description:
      "I've had the privilege of working alongside talented individuals from diverse creative backgrounds.",
  },
  {
    name: "CJCHIRAG X VIJAY DADA",
    images: {
      img1: admin,
      img2: "https://yt3.googleusercontent.com/a-WpvWKCjWgYSIxoE0Kd1_3DDtO5P2zNl0T6-DpIxc43HIVvHz7gHAGjkIt_J0sLKdJsP_T4=s900-c-k-c0x00ffffff-no-rj",
    },
    description:
      "I've had the privilege of working alongside talented individuals from diverse creative backgrounds.",
  },
  {
    name: "CJCHIRAG X NAEZY",
    images: {
      img1: admin,
      img2: "https://img.redbull.com/images/c_crop,x_1025,y_0,h_2624,w_1968/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/5/3/bpvj4kkywmv5eusybqnu/naezy-naved-shaikh-mumbai-hip-hop-rapper", 
    },
    description:
      "I've had the privilege of working alongside talented individuals from diverse creative backgrounds.",
  },
  {
    name: "CJCHIRAG X OFFICIAL BHAGAT",
    images: {
      img1: admin,
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClf0Ygt9V89LUUQgU66oQ0l5IWm52KBvTjw&s",
    },
    description:
      "I've had the privilege of working alongside talented individuals from diverse creative backgrounds.",
  },
  {
    name: "CJCHIRAG X NICK L",
    images: {
      img1: admin,
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBSmLJGMnWajTXSHqhsjA6u2SQ6dLhITnhcw&s",
    },
    description:
      "I've had the privilege of working alongside talented individuals from diverse creative backgrounds.",
  },
  {
    name: "CJCHIRAG X RAIYCHU",
    images: {
      img1: admin,
      img2: "https://doontoday.com/artist/wp-content/uploads/2021/10/4-3.jpeg",
    },
    description:
      "I've had the privilege of working alongside talented individuals from diverse creative backgrounds.",
  },
  {
    name: "CJCHIRAG X ROCKY GLOCK",
    images: {
      img1: admin,
      img2: "https://i1.sndcdn.com/avatars-wyilHOcjmiwokRqD-m8LC0Q-t240x240.jpg",
    },
    description:
      "I've had the privilege of working alongside talented individuals from diverse creative backgrounds.",
  },
];

// Reusable Artist Component
const ArtistCard: React.FC<Artist> = ({ name, images, description }) => {
  return (
    <div className="content">
      
      <div className="images">
        <div className="img-1">
          <img src={images.img1} alt={name} />
        </div>
        <div className="img-2">
          <img src={images.img2} alt={name} />
        </div>
      </div>
      <p className="text">{name}</p>
      <p className="desc">{description}</p>
      
    </div>
  );
};

const ArtistsWorkedWith: React.FC = () => {
  return (
    <section className="artist_container">
      {/* Heading part */}
      <div className="heading">
        <Fade cascade damping={0.1} triggerOnce>
        <div className="ticker">my works 🔥</div>
     
        <h2>
          Artists I've Worked <br />
          With
        </h2>
        <p className="text">
          Check out the amazing artists I've partnered with, delivering <br />
          unforgettable tracks through collaboration.
        </p>
        </Fade>
      </div>

      {/* Main flex box showing top 3 artists I worked with */}
      <div className="main-box">
        <Marquee pauseOnHover >
        {artistsData.map((artist, index) => (
          
          <ArtistCard key={index} {...artist} />
        ))}
        </Marquee>
       
      
      </div>
    </section>
  );
};

export default ArtistsWorkedWith;
