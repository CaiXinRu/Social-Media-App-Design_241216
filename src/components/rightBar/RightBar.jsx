import React from "react";
import "./RightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/100" />
              <span>CXR</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/100" />
              <span>AMY</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/100" />
              <p>
                <span>Yiting</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/100" />
              <p>
                <span>Yiting</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/100" />
              <p>
                <span>Yiting</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/100" />
              <div className="online"></div>
              <span>Sandy</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/100" />
              <div className="online"></div>
              <span>Sandy</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/100" />
              <div className="online"></div>
              <span>Sandy</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/100" />
              <div className="online"></div>
              <span>Sandy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
