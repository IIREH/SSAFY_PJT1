import { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ImageBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;
  padding-bottom: 2rem;

  button {
    float: right;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    margin-bottom: 2%;
    margin-left: 2%;
  
    background: ${palette.teal[4]};
    &:hover {
      background: ${palette.teal[2]};
    }
  }
`;



const Uploader = (props) => {

  console.log(props)
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "img/default_image.png",
  });

  const [loaded, setLoaded] = useState(false);

  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    
    if(e.target.files[0]){
      setLoaded("loading")
      fileReader.readAsDataURL(e.target.files[0])
    }
    fileReader.onload = () => {
      setImage(
        {
          image_file: e.target.files[0],
          preview_URL: fileReader.result
        }
      )
      setLoaded(true);
    }
    
  }

  const deleteImage = () => {
    setImage({
      image_file: "",
      preview_URL: "img/default_image.png",
    });
    setLoaded(false);
  }

  return (
    <ImageBlock>
      <input type="file" accept="image/*"
        onChange={saveImage}
        ref={refParam => inputRef = refParam}
        style={{ display: "none" }}
      />
      <div className="img-wrapper">
        {loaded === false || loaded === true ? (
          <img src={image.preview_URL} />
        ) : (
          <alert className="img-spinner" tip = "이미지 불러오는중"/>
        )}
      </div>

      <div className="upload-button">
        <button type="primary" onClick={deleteImage} danger>
          Delete
        </button>
        <button type="primary" onClick={() => inputRef.click()}>
          Upload
        </button>
      </div>
    </ImageBlock>
  );
}

export default Uploader;
