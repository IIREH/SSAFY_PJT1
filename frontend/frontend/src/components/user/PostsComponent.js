import {  useState } from "react";
import Button from "../common/Button";
import "./Profile.css";

const PostsComponent = (params) => {
  const [mode, setMode] = useState('userPosts');
  const { userPosts, userLikesPosts } = params;


  return(
    <>
    <div style={{ display: 'inline' }}>
            <Button style={{ display: 'inline'}} onClick={() => setMode('userPosts')}>포스트</Button>
         
            <Button onClick={() => setMode('userLikesPosts')} style={{ marginLeft: 5, display: 'inline'}}>관심목록</Button>
            <hr></hr>
          
        </div>
          {mode === 'userPosts' &&
            <div className="row row-cols-3 g-4 justify-content-start">
              {userPosts.map(userPost => (
                <div key={userPost.id}>
                  <div className="col">
                    <div className="card">
                      <img src={`data:image/jpeg;base64,${userPost.photo.image.data}`} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">{userPost.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
          {mode === 'userLikesPosts' &&
            <div className="row row-cols-3 g-4 justify-content-start">
              {userLikesPosts.map(userLikePost => (
                <div key={userLikePost.id}>
                  <div className="col">
                    <div className="card">
                      <img src={`data:image/jpeg;base64,${userLikePost.photo.image.data}`} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">{userLikePost.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
          </>
  );
};


export default PostsComponent;