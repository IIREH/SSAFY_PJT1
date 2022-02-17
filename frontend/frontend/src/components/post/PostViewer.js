import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import Button from '../common/Button';
import { useEffect, useState } from 'react';
import client from '../../lib/api/client';

const PostViewerBlock = styled(Responsive)`
  margin-top: 1rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 1rem;
  margin-bottom: 2rem;
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
const PostViewer = ({ post, nickname, imageCode, contestName, error, loading, actionButtons, ownPost }) => {
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

  const { content, writeDate, hashTags } = post;
  const usernickname = nickname;

  return (
    <PostViewerBlock style={{ border: 10, borderStyle: 'dashed', borderRadius: 15, borderColor: '#f8f0fc', paddingBottom: 30, width: 850, padding: 30 }}>
      <br></br>
      <div style={{ textAlign: 'start' }}>
        <Button cyan to="/">
          뒤로가기
        </Button>
      </div> 
      <PostHead>
        {/* <h2 style={{textIndent: 50}}>{usernickname}님의 글</h2> */}
      <div style={{textAlign: 'end'}}>
        {contestName}
        <SubInfo 
            usernickname={usernickname}
            writeDate={writeDate}
            hasMarginTop 
          />
      </div>
        <Tags tags={hashTags} />
      </PostHead>
      <div style={{textAlign: 'center'}}>
      <img src={`data:image/jpeg;base64,${imageCode}`} style={{ width: 400, height: 300, textAlign: 'center', marginBottom: 30 }} alt="..." />
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      {actionButtons}
    </PostViewerBlock>
  );
};

export default PostViewer;
