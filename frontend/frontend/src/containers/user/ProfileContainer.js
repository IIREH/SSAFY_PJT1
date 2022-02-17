import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
  follow, unfollow, checkFollow, 
  updateFollowingNumber, updateFollowerNumber,
  updatePosts, updateLikesPosts
} from '../../modules/profile';
import { deleteUserInfo } from '../../modules/user';
import FollowComponent from '../../components/user/FollowComponent';
import PostsComponent from '../../components/user/PostsComponent';
import client from '../../lib/api/client';

const ProfileContainer = ({ nickname }) => {
  const [myFollowing, setMyFollowing] = useState([]);
  const dispatch = useDispatch();
  const { user, profile } = useSelector(({ user, profile }) => ({
    user: user.user,
    profile: profile,
  }));
  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    if (user) {
      const newUser = user.replace(/"/gi, '');
      console.log(newUser)
      // user가 해당 profile주인을 팔로우하는지 체크
      client.get(`/api/follow/following?nickName=${newUser}`)
        .then(res => {
          setMyFollowing(res.data.response);
          console.log(myFollowing)
          var result = null;
          const checkFollowGroup = myFollowing.map((user) => {
            console.log(user)
            console.log(nickname)
            if (user === nickname) {
              result = true
            } else {
              result = false
            }
          });
          console.log(checkFollowGroup)
          dispatch(checkFollow(result));
        })
        .catch(e => {
          console.log(e)
        })
    }    

    // 해당 profile 주인의 팔로잉 숫자 가져오기
    client.get(`/api/follow/following?nickName=${nickname}`)
      .then(res => {
        const followingNumber = res.data.response.length;
        dispatch(updateFollowingNumber(followingNumber))
      })
      .catch(e => {
        console.log(e)
      })

    // 해당 profile 주인의 팔로워 숫자 가져오기
    client.get(`/api/follow/follower?nickName=${nickname}`)
      .then(res => {
        const followerNumber = res.data.response.length;
        dispatch(updateFollowerNumber(followerNumber))
      })
      .catch(e => {
        console.log(e)
      })

    
  }, [nickname]);

  useEffect(() => {
    // 해당 profile 주인이 작성한 글 찾기
    client.get(`/api/post?nickName=${nickname}`)
      .then(res => {
        console.log(res.data.response);
        dispatch(updatePosts(res.data.response))
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  useEffect(() => {
    // 해당 profile 주인이 좋아요 누른 글 찾기
    client.get(`/api/likePost?nickName=${nickname}`)
      .then(res => {
        console.log(res.data.response)
        dispatch(updateLikesPosts(res.data.response))
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  const onClickFollow = (e) => {
    e.preventDefault();
    console.log('팔로우/언팔로우 버튼 클릭');
    if (!profile.isfollowing) {
      client.post(`/api/follow?jwt=${jwt}&nickName=${nickname}`)
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          console.log(e)
        })
      dispatch(follow());
    };
    if (profile.isfollowing) {
      client.delete(`/api/follow?jwt=${jwt}&nickName=${nickname}`)
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          console.log(e)
        })
      dispatch(unfollow());
    }
    // 각 유저 DB에 접근하여 팔로우 관계설정 요청 보내는 기능 추가예정
  };

  const newUser = user && user.replace(/"/gi, '');

  const onDelete = () => {
    dispatch(deleteUserInfo());
    localStorage.removeItem('user');

    client.delete(`/api/user?jwt=${jwt}`)
      .then(res => {
        console.log(res)
      })
      .catch(e => {
        console.log(e);
      })
    localStorage.removeItem('jwt');
  }
  
  return (
    <div>
      <FollowComponent 
        nickname={nickname}
        user={newUser}
        isfollowing={profile.isfollowing}
        following={profile.following}
        follower={profile.follower}
        onClickFollow={onClickFollow}
        onDelete={onDelete}
      />
      <PostsComponent
        userPosts={profile.userPosts}
        userLikesPosts={profile.userLikesPosts}
      />
    </div>
  );
};

export default ProfileContainer