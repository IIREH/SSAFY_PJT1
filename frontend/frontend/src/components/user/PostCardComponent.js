import { Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import { useEffect, useState } from 'react';

const IconButton = styled(Responsive)`
  font-size: 1.25rem;
  position: absolute;
  left: 60%;
  color: ${palette.pink[5]};
`;

const PostCardComponent = ({ userPost, onClickLike }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(userPost.likedByList.length)
    console.log(count)
  }, [setCount, userPost.likedByList.length, count])

  return (
    <Card>
      <Link to={`/post/${userPost.id}`}>
        <Card.Img src={`data:image/jpeg;base64,${userPost.photo.image.data}`} variant="top" alt="..." />
      </Link>
      <Card.Body>
        <Card.Text dangerouslySetInnerHTML={{ __html: userPost.content }}></Card.Text>
        <IconButton><i onClick={() => onClickLike(userPost)} className="fa fa-heart"></i> {count} Likes </IconButton>
      </Card.Body>
    </Card>
  )
}

export default PostCardComponent;