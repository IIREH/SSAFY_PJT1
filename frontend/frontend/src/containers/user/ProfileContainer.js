import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from '../../modules/profile';
import FollowComponent from '../../components/user/FollowComponent';
import PostsComponent from '../../components/user/PostsComponent';

const ProfileContainer = ({ nickname }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector(({ user, profile }) => ({
    user: user.user,
    profile: profile,
  }));

  const onClickFollow = (e) => {
    e.preventDefault();
    console.log('팔로우/언팔로우 버튼 클릭');
    if (!profile.isfollowing) {
      dispatch(follow());
    };
    if (profile.isfollowing) {
      dispatch(unfollow());
    }
    // 각 유저 DB에 접근하여 팔로우 관계설정 요청 보내는 기능 추가예정
  };

  return (
    <div>
      {nickname}님의 프로필 페이지
      <FollowComponent 
        isfollowing={profile.isfollowing}
        following={profile.following}
        follower={profile.follower}
        onClickFollow={onClickFollow}
      />
      <PostsComponent
        userPosts={profile.userPosts}
        userLikesPosts={profile.userLikesPosts}
      />
    </div>
  );
};

export default ProfileContainer