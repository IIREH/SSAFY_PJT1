import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unloadPost, setPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';
import { useParams, useNavigate } from 'react-router-dom';
import client from '../../lib/api/client';

const PostViewerContainer = () => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { postId } = useParams();
  const [imageCode, setImageCode] = useState('');
  const [contestName, setContestName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
    }),
  );

  useEffect(() => {
    // dispatch(readPost(postId));
    client.get(`/api/post/${postId}`)
      .then(res => {
        const myPost = res.data.response;
        dispatch(setPost(myPost));

        client.get(`/api/photo/${myPost.photoId}`)
          .then(res => {
            setImageCode(res.data.response);
          })
          .catch(e => {
            console.log(e)
          })

        const contestId = myPost.contestId;

        client.get(`/api/contest?id=${contestId}`)
          .then(res => {
            setContestName(res.data.response[0].name);
          })
          .catch(e => {
            console.log(e)
          })

      })
      .catch(e => {
        console.log(e)
      })

    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate('/write');
  };

  const username = localStorage.getItem('user');

  const onRemove = () => {
    client.delete(`/api/post/${postId}`)
      .then(res => {
        console.log(res)
        navigate(`/profile/${username}`)
      })
      .catch(e => {
        console.log(e)
      })
  };

  const userEmail = localStorage.getItem('userEmail')

  const ownPost = (user && userEmail) === (post && post.userEmail);

  const [nickname, setNickname] = useState('');

  useEffect(() => {
    client.get(`/api/user/nickName?email=${userEmail}`)
      .then(res => {
        setNickname(res.data.response)
      })
      .catch(e => {
        console.log(e)
      })
  })

  return (
    <PostViewer
      post={post}
      nickname={nickname}
      imageCode={imageCode}
      contestName={contestName}
      loading={loading}
      error={error}
      actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default PostViewerContainer;
