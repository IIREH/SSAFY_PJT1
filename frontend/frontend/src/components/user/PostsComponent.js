import {  useState } from "react";

const PostsComponent = (params) => {
  const [mode, setMode] = useState('userPosts');
  const { userPosts, userLikesPosts } = params;


  return(
    <div>
      <button onClick={() => setMode('userPosts')}>포스트</button>
      <button onClick={() => setMode('userLikesPosts')}>관심목록</button>
      <br />
      {mode}
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
  );
};

export default PostsComponent;