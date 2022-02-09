const FollowComponent = (params) => {
  const { isfollowing, following, follower, onClickFollow } = params;

  return(
    <div>
      <p>팔로잉: {following}</p>
      <p>팔로워: {follower}</p>
      {isfollowing ? 
        <button onClick={onClickFollow}>언팔로우</button>
      :
        <button onClick={onClickFollow}>팔로우</button>
      }
    </div>
  );
};

export default FollowComponent;