import { useState } from "react";

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
            <div class="row row-cols-3 g-4 justify-content-start">
              {userPosts.map(userPost => (
                <div key={userPost.id}>
                  <div class="col">
                    <div class="card">
                      <img src={`data:image/jpeg;base64,${userPost.photo.image.data}`} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-text">{userPost.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
          {mode === 'userLikesPosts' &&
            <div class="row row-cols-3 g-4 justify-content-start">
              {userLikesPosts.map(userLikePost => (
                <div key={userLikePost.id}>
                  <div class="col">
                    <div class="card">
                      <img src={`data:image/jpeg;base64,${userLikePost.photo.image.data}`} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-text">{userLikePost.content}</p>
                      </div>
                    </div>
                  </div>
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