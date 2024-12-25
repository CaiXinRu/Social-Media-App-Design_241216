import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  // TEMPORARY
  const comments = [
    {
      id: 1,
      desc: "Commodo ex qui nulla ex eiusmod velit fugiat et ullamco id et. Cillum eiusmod excepteur elit eiusmod duis Lorem. Sint culpa nulla cillum cillum ipsum est velit ea.",
      name: "Annie",
      userId: 1,
      profilePicture: "https://picsum.photos/550",
    },
    {
      id: 2,
      desc: "Elit exercitation sunt id in enim nulla esse qui culpa amet sint. Officia occaecat voluptate consectetur officia reprehenderit Lorem pariatur ut mollit nisi magna aliquip nulla. Minim nisi anim qui nisi commodo. Adipisicing non quis enim ex fugiat irure excepteur commodo.",
      name: "Doris",
      userId: 2,
      profilePicture: "https://picsum.photos/550",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePicture} alt="" />
          <div className="message">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <div className="date">1 hour ago</div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
