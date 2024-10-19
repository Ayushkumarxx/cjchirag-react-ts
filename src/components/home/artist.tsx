import React from "react";
import "./style/artist.css";
import { admin } from "../../assets/index";
import { Fade,  Zoom, AttentionSeeker } from "react-awesome-reveal";
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
    name: "CJCHIRAG X LOCA",
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
        <AttentionSeeker effect="tada" triggerOnce>  <div className="ticker">my works 🔥</div></AttentionSeeker>
     
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
        <Zoom cascade damping={0.1} triggerOnce>
        {artistsData.map((artist, index) => (
          
          <ArtistCard key={index} {...artist} />
        ))}
        </Zoom>
      </div>
    </section>
  );
};

export default ArtistsWorkedWith;
