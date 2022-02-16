import { Link } from "react-router-dom";
import Button from "../common/Button";

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
            <div style={{ textAlign : 'center'}}>
              <h3 style={{ display : 'inline', marginRight: 6}}> {nickname}님을 💨 </h3>
            {isfollowing ?
              <Button style={{ marginRight: 6, display: 'inline-block'}} onClick={onClickFollow}>Unfollow</Button>
              :
              <Button style={{ marginRight: 6, display: 'inline-block'}} onClick={onClickFollow}>Follow</Button>
            }
            <hr></hr>
            </div>
          :
            <div style={{ textAlign: 'center'}}>
              <h3 style={{ display : 'inline', marginRight: 6}}>회원 정보 💨 </h3>
              <Button style={{ marginRight: 6, display: 'inline-block'}}>
                <Link to="/updateUserInfo" style={{ textDecoration: 'none', color: 'white', display: 'inline-block' }}>회원정보수정</Link>
              </Button>
              <Button style={{ marginRight: 6, display: 'inline-block'}} onClick={onDelete}>회원탈퇴</Button>
            <hr></hr>
            </div>
          }
    </>
  );
};

export default FollowComponent;
