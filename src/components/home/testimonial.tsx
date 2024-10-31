import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { test1, test2, test3, test4, test5, test6 } from "../../assets/index";
import "./style/testimonial.css";
import { Fade} from "react-awesome-reveal";
interface Comment {
  name: string;
  username: string;
  profileImage: string;
  socialLink: string;
  comment: string;
}

const commentsData: Comment[] = [
  {
    name: "Ayush Kumar",
    username: "@_.ayush.kr",
    profileImage: test1,
    socialLink: "https://www.instagram.com/_.ayush.kr",
    comment:
      "CJChirag's beats are next-level. His creativity and mastery in music production are unmatched!",
  },
  {
    name: "Rishabh Raj",
    username: "@i__rishabhraj",
    profileImage: test2,
    socialLink: "https://www.instagram.com/i__rishabhraj",
    comment:
      "CJChirag brings a fresh vibe to every track. His seamless blend of beatboxing, production, and mixing makes him a standout in the industry. Highly recommend!",
  },
  {
    name: "LOCA",
    username: "@loka_music",
    profileImage: test3,
    socialLink: "https://www.instagram.com/loka_music",
    comment:
      "CJChirag is incredibly versatile, from beatboxing to mixing tracks with precision. His unique sound elevates every project, and his passion shines through in every beat. It’s always a pleasure working with him.",
  },
  {
    name: "Kalam inkk",
    username: "@kalam_inkk",
    profileImage: test4,
    socialLink: "https://www.instagram.com/kalam_inkk",
    comment:
      "CJChirag’s music production skills are top-tier. He’s got a great ear for detail and knows exactly how to bring a vision to life.",
  },
  {
    name: "Mass appeal india",
    username: "@massappealindia",
    profileImage: test5,
    socialLink: "https://www.instagram.com/massappealindia",
    comment:
      "The way CJChirag mixes and creates beats is pure genius—he never misses a beat.",
  },
  {
    name: "niTish",
    username: "@nitzzz.o2o",
    profileImage: test6,
    socialLink: "https://www.instagram.com/nitzzz.o2o",
    comment:
      "CJChirag’s production skills are top-notch. He’s got an amazing ear for detail and consistently brings ideas to life with impressive results!",
  },
];

const Testimonial: React.FC = () => {
  // Function to create a comment element
  const createCommentElement = (comment: Comment) => {
    return (
      <div className="comments" key={comment.username}>
        <div className="head">
          <div className="imagenid">
            <div className="image">
              <img
                src={comment.profileImage}
                alt={`${comment.name}'s profile picture`}
              />
            </div>
            <div className="id">
              <div className="name">{comment.name}</div>
              <div className="username">{comment.username}</div>
            </div>
          </div>
          <div className="social">
            <a
              href={comment.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="i" />
            </a>
          </div>
        </div>
        <div className="content">{comment.comment}</div>
      </div>
    );
  };

  return (
    <section className="testimonial">
      <div className="gardient-1"></div>
      <div className="gardient-2"></div>
      <div className="box-1">
        <Fade cascade damping={0.1} triggerOnce>
       
        <div className="ticker">Testimonial 🔥</div>
       
        <h2>Public cheers for me!</h2>
        <p className="text">Find out our user spreading the words!</p>
        </Fade>
      </div>
      <div className="box-2">
        <div className="child" id="testimonial-1">
          <Fade cascade damping={0.1} triggerOnce>
          {commentsData.slice(0, 2).map(createCommentElement)}
          </Fade>
        </div>
        <div className="child" id="testimonial-2">
        <Fade cascade damping={0.1} triggerOnce>
          {commentsData.slice(2, 4).map(createCommentElement)}
          </Fade>
        </div>
        <div className="child" id="testimonial-3">
        <Fade cascade damping={0.1} triggerOnce>
          {commentsData.slice(4).map(createCommentElement)}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
