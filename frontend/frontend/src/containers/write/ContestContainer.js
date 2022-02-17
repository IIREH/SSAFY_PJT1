import Contest from "../../components/write/Contest";
import { useState } from "react";

const ContestContainer = () => {
  const [keyword, setKeyword] = useState('');

  // 검색 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
  };

  return <Contest onChange={onChange} keyword={keyword} setKeyword={setKeyword} />
};

export default ContestContainer;