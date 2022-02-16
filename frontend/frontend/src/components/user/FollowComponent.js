import { Link } from "react-router-dom";
import Button from "../common/Button";
import "./Profile.css";

const FollowComponent = (params) => {
  const { user, nickname, isfollowing, following, follower, onClickFollow, onDelete } = params;


  return(
    <>
    <div className="right" style={{ textAlign: 'center'}}>
          <h1>{nickname}</h1><h2>님의 프로필 페이지</h2>
          <br></br>
          <span style={{marginRight: 10}}> 팔로잉: {following}  </span>
          <span> | </span>
          <span style={{marginLeft: 10}}> 팔로워: {follower}  </span>
          <hr></hr>
    </div>
          {user && user !== nickname ?
            <div style={{ display: 'inline'}}>
            {isfollowing ?
              <Button style={{ marginLeft: 830, marginRight: 5}} onClick={onClickFollow}>Unfollow</Button>
              :
              <Button style={{ marginLeft: 830, marginRight: 5}} onClick={onClickFollow}>Follow</Button>
            }
            </div>
          :
            <div style={{ display: 'inline' }}>
              <Button style={{ marginLeft: 750}}>
                <Link to="/updateUserInfo" style={{ textDecoration: 'none', color: 'white' }}>회원정보수정</Link>
              </Button>
              <Button style={{marginLeft : 5, marginRight: 5}} onClick={onDelete}>회원탈퇴</Button>
            </div>
          }
    </>
  );
};

export default FollowComponent;
