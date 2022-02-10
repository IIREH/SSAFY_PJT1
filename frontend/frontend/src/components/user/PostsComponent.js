import {  useState } from "react";

const PostsComponent = (params) => {
  const [mode, setMode] = useState('userPosts');
  const { userPosts, userLikesPosts } = params;


  return(
    <div>
      <div class="container-fluid mb-3">
        <div class="row mx-0 justify-content-center">
          <div class="col-2">
            <button type="button" class="mt-0 btn btn-primary mx-auto" onClick={() => setMode('userPosts')}>포스트</button>
          </div>
          <div class="col-2">
            <button type="button" class="mt-0 btn btn-primary mx-auto" onClick={() => setMode('userLikesPosts')}>관심목록</button>
          </div>
        </div>
        <div class="row mx-0 justify-content-center">
          {mode === 'userPosts' &&
            <div>
              {userPosts.map(userPost => (
                <div key={userPost.id}>
                  <p>{userPost.title}</p>
                  <p>{userPost.content}</p>
                  <hr />
                </div>
              ))}
            </div>
          }
          {mode === 'userLikesPosts' &&
            <div>
              {userLikesPosts.map(userLikePost => (
                <div key={userLikePost.id}>
                  <p>{userLikePost.title}</p>
                  <p>{userLikePost.content}</p>
                  <hr />
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default PostsComponent;