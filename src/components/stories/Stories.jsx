import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  // TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Tiffany",
      img: "https://picsum.photos/500",
    },
    {
      id: 2,
      name: "Tiffany",
      img: "https://picsum.photos/500",
    },
    {
      id: 3,
      name: "Tiffany",
      img: "https://picsum.photos/500",
    },
    {
      id: 4,
      name: "Tiffany",
      img: "https://picsum.photos/500",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
