import { Link } from "react-router-dom";

const FollowComponent = (params) => {
  const { user, nickname, isfollowing, following, follower, onClickFollow, onDelete } = params;

  return(
    <div>
      <div class="container-fluid mb-3">
        <div class="row mx-0 justify-content-center">
          <div class="col-2">{nickname}</div>
          <div class="col-2">팔로잉: {following}</div>
          <div class="col-2">팔로워: {follower}</div>
          {user && user !== nickname ?
            <div class="col-2">
            {isfollowing ?
              <button type="button" class="mt-0 btn btn-primary mx-auto" onClick={onClickFollow}>Unfollow</button>
            :
              <button type="button" class="mt-0 btn btn-primary mx-auto" onClick={onClickFollow}>Follow</button>
            }
            </div>
          :
            <div class="col-2">
              <button type="button" class="col-6 mt-0 btn btn-primary mx-auto">
                <Link to="/updateUserInfo" style={{ textDecoration: 'none', color: 'white' }}>회원정보수정</Link>
              </button>
              <button type="button" class="col-6 mt-0 btn btn-primary mx-auto" onClick={onDelete}>회원탈퇴</button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default FollowComponent;