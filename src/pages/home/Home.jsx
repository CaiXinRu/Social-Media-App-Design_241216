import React from "react";
import "./home.scss";
import Stories from "../../components/stories/stories";
import Posts from "../../components/posts/Posts";

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
};

export default Home;
