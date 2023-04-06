import React from 'react';
import './rightbar.scss';
import Person1 from '../../assets/me.jpeg';
const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={Person1} alt="" />
              <span>Stella2 Liu</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Person1} alt="" />
              <span>Stella2 Liu</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Lastest activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={Person1} alt="" />
              <p>
                <span>Stella2 Liu</span> Changed their cover picuture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Person1} alt="" />
              <p>
                <span>Stella2 Liu</span> Changed their cover picuture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Person1} alt="" />
              <p>
                <span>Stella2 Liu</span> Changed their cover picuture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Person1} alt="" />
              <p>
                <span>Stella2 Liu</span> Changed their cover picuture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={Person1} alt="" />
              <div className="online" />
              <span>Stella2 Liu</span>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Person1} alt="" />
              <div className="online" />
              <span>Stella2 Liu</span>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Person1} alt="" />
              <div className="online" />
              <span>Stella2 Liu</span>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Person1} alt="" />
              <div className="online" />
              <span>Stella2 Liu</span>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
