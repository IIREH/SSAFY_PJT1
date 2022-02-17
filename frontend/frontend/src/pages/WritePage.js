import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import styled from "styled-components";
import HeaderContainer from "../containers/common/HeaderContainer";
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import { Helmet } from 'react-helmet-async';
import { BoxUpload, ImagePreview } from '../containers/write/UploadImgContainer';
import { changeField } from '../modules/write';
import client from '../lib/api/client';
import ContestContainer from '../containers/write/ContestContainer';

const WritePage = () => {
  const [image, setImage] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);
  const [imageId, setImageId] = useState('');

  const dispatch = useDispatch();

  const onChangePhoto = useCallback(imageId => 
    dispatch(
      changeField({
        key: 'photoId',
        value: imageId,
      }),
    ),
    [dispatch]
  );

  function handleImageChange(e) {
    console.log(e.target.files[0])
    if(e.target.files && e.target.files[0]) {
      let reader = new FileReader()

      reader.onload = function(e) {
        setImage(e.target.result)
        setIsUploaded(true)
      }

      reader.readAsDataURL(e.target.files[0])

      const formData = new FormData();
      formData.append('image', e.target.files[0]);

      client.post('/api/photo', formData)
        .then(res => {
          setImageId(res.data.response);
          console.log(imageId)
          onChangePhoto(imageId);
        })
        .catch(e => {
          console.log(e);
        })
    }
  }

  return (
    <>
    <HeaderContainer />
    <Responsive>
      <Helmet>
        <title>글 작성하기 </title>
      </Helmet>
      <div style={{ border: 10, borderStyle: 'dashed', borderRadius: 15, borderColor: '#f8f0fc', paddingTop: 50, paddingLeft: 100, paddingBottom: 50 }}>
      <h2 style={{ textIndent: 20 }}>추억 남기기</h2>
      <EditorContainer />
      
      <h4>🔍 공연 검색하기</h4>
      <ContestContainer />
      <TagBoxContainer />
      <br></br>
      <h4> 📂 파일 선택 </h4>
      <BoxUpload>
        <div className='image-upload'>
          {
            !isUploaded ? (
              <>
                {/* <form method="POST" action="http://i6c208.p.ssafy.io:8090/api/photo" encType="multipart/form-data">
                    Image:<input type="file" name="image" accept="image/*" />
                    <input type="submit" value="Upload" />
                </form> */}
                <label htmlFor='upload-input'>
                  <img src='/folder.png' draggable='false' alt='folder' style={{ width: 100, height: 100, marginLeft: 40}}></img>
                  <br></br>
                  <br></br>
                  <p>클릭하여 이미지 업로드하기</p>
                </label>
                <input id="upload-input" type="file" name="image" accept='.jpg,.jpeg,.gif,.png,.mov,.mp4' onChange={handleImageChange}/>
              </>
            ) : (
              <ImagePreview>
                <img className="close-icon" src='/closeIcon.svg' alt='CloseIcon'
                onClick={() => {
                  setIsUploaded(false)
                  setImage(null)
                }}  
                />
                <img id="uploaded-img" src={image} draggable={false} alt="uploaded-img" />
              </ImagePreview>
            )
          }          
        </div>
      </BoxUpload>

      </div>
      <WriteActionButtonsContainer />
    </Responsive>
    </>
  );
};

// const WritePage = (props) => {
//   return (
//     <Container>
//       <ArtCard>
//         <UserInfo>
//           <CardBackground />
//           <a href='#!'>
//             <Photo />
//           </a>
//           <a href='#!'>
//             <AddPhotoText>Add a photo</AddPhotoText>
//           </a>
//         </UserInfo>
//         <Widget>
//           <a href='#!'>
//             <div>
//               <span>Connections</span>
//               <span>Grow your network</span>
//             </div>
//             <img src="/images/widget-icon.svg" alt="" />
//           </a>
//         </Widget>
//         <Item>
//           <span>
//             <img src="/images/item-icon.svg" alt="" />
//             My Items
//           </span>
//         </Item>
//       </ArtCard>

//       <CommunityCard>
//         <a href='#!'>
//           <span>Groups</span>
//         </a>
//         <a href='#!'>
//           <span>
//             Events
//             <img src="/images/plus-icon.svg" alt="" />
//           </span>
//         </a>
//         <a href='#!'>
//           <span>Follow Hashtags</span>
//         </a>
//         <a href='#!'>
//           <span>Discover more</span>
//         </a>
//       </CommunityCard>
//     </Container>
//   );
// };

// const Container = styled.div`
//   grid-area: leftside;
// `;

// const ArtCard = styled.div`
//   text-align: center;
//   overflow: hidden;
//   margin-bottom: 8px;
//   background-color: #fff;
//   border-radius: 5px;
//   transition: box-shadow 83ms;
//   position: relative;
//   border: none;
//   box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
// `;

// const UserInfo = styled.div`
//   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
//   padding: 12px 12px 16px;
//   word-wrap: break-word;
//   word-break: break-word;
// `;

// const CardBackground = styled.div`
//   background: url("/images/card-bg.svg");
//   background-position: center;
//   background-size: 462px;
//   height: 54px;
//   margin: -12px -12px 0;
// `;

// const Photo = styled.div`
//   box-shadow: none;
//   background-image: url("/images/photo.svg");
//   width: 72px;
//   height: 72px;
//   box-sizing: border-box;
//   background-clip: content-box;
//   background-color: white;
//   background-position: center;
//   background-size: 60%;
//   background-repeat: no-repeat;
//   border: 2px solid white;
//   margin: -38px auto 12px;
//   border-radius: 50%;
// `;

// const Link = styled.div`
//   font-size: 16px;
//   line-height: 1.5;
//   color: rgba(0, 0, 0, 0.9);
//   font-weight: 600;
// `;

// const AddPhotoText = styled.div`
//   color: #0a66c2;
//   margin-top: 4px;
//   font-size: 12px;
//   line-height: 1.33;
//   font-weight: 400;
// `;

// const Widget = styled.div`
//   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
//   padding-top: 12px;
//   padding-bottom: 12px;

//   & > a {
//     text-decoration: none;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 4px 12px;

//     &:hover {
//       background-color: rgba(0, 0, 0, 0.08);
//     }

//     div {
//       display: flex;
//       flex-direction: column;
//       text-align: left;
//       span {
//         font-size: 12px;
//         line-height: 1.333;
//         &:first-child {
//           color: rgba(0, 0, 0, 0.6);
//         }
//         &:nth-child(2) {
//           color: rgba(0, 0, 0, 1);
//         }
//       }
//     }
//   }

//   svg {
//     color: rgba(0, 0, 0, 1);
//   }
// `;

// const Item = styled.a`
//   border-color: rgba(0, 0, 0, 0.8);
//   text-align: left;
//   padding: 12px;
//   font-size: 12px;
//   display: block;
//   span {
//     display: flex;
//     align-items: center;
//     color: rgba(0, 0, 0, 1);
//     svg {
//       color: rgba(0, 0, 0, 0.6);
//     }
//   }

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.08);
//   }
// `;

// const CommunityCard = styled(ArtCard)`
//   padding: 8px 0 0;
//   text-align: left;
//   display: flex;
//   flex-direction: column;
//   a {
//     color: black;
//     padding: 4px 12px 4px 12px;
//     font-size: 12px;

//     &:hover {
//       color: #0a66c2;
//     }

//     span {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//     }

//     &:last-child {
//       color: rgba(0, 0, 0, 0.6);
//       text-decoration: none;

//       border-top: 1px solid #d6cec2;
//       padding: 12px;
//       &:hover {
//         background-color: rgba(0, 0, 0, 0.08);
//       }
//     }
//   }
// `;

export default WritePage;
