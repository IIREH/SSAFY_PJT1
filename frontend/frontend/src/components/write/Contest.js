import { useEffect } from "react";
import { useState } from "react";
import client from "../../lib/api/client";
import { setContestId } from "../../modules/write";
import { useDispatch } from "react-redux";

const Contest = ({ keyword, onChange, setKeyword }) => {
  const [contests, setContests] = useState([]);
  const dispatch = useDispatch();

  // 키워드에 따른 공연 검색
  useEffect(() => {
    client.get(`/api/contest?name=${keyword}`)
      .then(res => {
        console.log(res.data.response)
        setContests(res.data.response);
      })
      .catch(e => {
        console.log(e)
      })
  }, [keyword])

  const onChangeInput = (params, e) => {
    const constestId = params;
    dispatch(setContestId(constestId));
    
    setKeyword('');
  }

  return (
    <div>
      <input type="text" class="col-12 d-flex" name="keyword" placeholder="검색어를 입력해주세요" onChange={onChange} />
      <table
        style={{
          "position": "absolute",
          "table-layout": "fixed",
          "z-index": "1",
          "width": "100%",
        }} 
        class="table table-light table-bordered d-block p-0 mt-0 text-start"
      >
        {keyword &&
          <div style={{"position": "absolute", "z-index": "201"}}>
            <tbody class="border">
              <tr class="bg-dark text-light">공연 검색</tr>
              {contests ?
                (contests.map(searchContest => (
                  <tr class="text-black p-0 mb-1" key={searchContest.id} onClick={(e)=>{onChangeInput(searchContest.id, e)}}>
                    {searchContest.name}
                  </tr>
                )))
              :
                <tr>공연 검색 결과가 없습니다.</tr>
              }
            </tbody>                  
          </div>
        }
      </table>
    </div>
  )
};

export default Contest;