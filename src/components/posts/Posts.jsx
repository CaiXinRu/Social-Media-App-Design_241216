import React from "react";
import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Eric",
      userId: 10,
      profilePic: "https://picsum.photos/450",
      desc: "Et deserunt eu tempor eiusmod sunt voluptate. Ullamco ea deserunt consequat deserunt incididunt aute et velit occaecat minim qui magna anim laboris. Laboris culpa officia labore reprehenderit reprehenderit nulla Lorem magna laborum do tempor ex ex id.",
      img: "https://picsum.photos/600",
    },
    {
      id: 2,
      name: "Jessi",
      userId: 11,
      profilePic: "https://picsum.photos/450",
      desc: "Voluptate culpa duis mollit reprehenderit mollit cillum officia magna irure ut. Proident eu ipsum aute aliquip Lorem. Exercitation occaecat incididunt minim irure officia adipisicing sit. Veniam velit deserunt excepteur cillum enim nostrud duis irure in velit pariatur ex. Aliquip consectetur incididunt labore laboris excepteur officia fugiat ipsum. Ad do consequat voluptate ad do non.",
      img: "https://picsum.photos/600",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
