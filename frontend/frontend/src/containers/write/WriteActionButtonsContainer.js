import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { writePost, updatePost } from '../../modules/write';
import { useNavigate } from 'react-router-dom';
import client from '../../lib/api/client';

const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { content, contestId, tags, photoId, post, postError, originalPostId } = useSelector(
    ({ write, user }) => ({
      content: write.content,
      contestId: write.contestId,
      tags: write.tags,
      photoId: write.photoId,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost({ content, tags, id: originalPostId }));
      return;
    }

    // 글작성 요청
    const userEmail = localStorage.getItem('userEmail');
    const username = localStorage.getItem('user').replace(/"/gi, "");

    const params = {
      content: content,
      contestId: contestId,
      tags: tags,
      photoId: photoId,
      userEmail: userEmail,
    }

    client.post('/api/post', params)
      .then(res => {
        console.log(res)
        navigate(`/profile/${username}`)
      })
      .catch(e => {
        console.log(e)
      })
  };

  // 취소
  const onCancel = () => {
    navigate(-1);
  };

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default WriteActionButtonsContainer;
