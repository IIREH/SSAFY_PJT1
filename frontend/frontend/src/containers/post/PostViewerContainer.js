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

  const onRemove = async () => {
    try {
      await removePost(postId);
      navigate('/'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  const userEmail = localStorage.getItem('userEmail')

  const ownPost = (user && userEmail) === (post && post.userEmail);

  return (
    <PostViewer
      post={post}
      imageCode={imageCode}
      loading={loading}
      error={error}
      actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default PostViewerContainer;
