import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, imageCode, error, loading, actionButtons, ownPost }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {
    return null;
  }

  const { content, userEmail, writeDate, hashTags } = post;

  return (
    <PostViewerBlock>
      <PostHead>
        <SubInfo
          userEmail={userEmail}
          writeDate={writeDate}
          hasMarginTop
        />
        <Tags tags={hashTags} />
      </PostHead>
      <img src={`data:image/jpeg;base64,${imageCode}`} alt="..." />
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
      {actionButtons}
    </PostViewerBlock>
  );
};

export default PostViewer;
