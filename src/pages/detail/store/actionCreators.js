import axios from "axios";
import * as constants from "./constants"

const changeDetail = (title,content)=>({
    type: constants.CHANGE_DETAIL,
    title,
    content
});

export const getDetail = (id)=> {
  return (dispatch) => {
     // axios.get("http://127.0.0.1:8000/api/detail.json").then((res)=>{
     axios.get("http://127.0.0.1:8000/api/detail.json?id="+id).then((res)=>{ //バックエンドまた対応してない
         const result = res.data.data;
         dispatch(changeDetail(result.title,result.content));
     })
  }
};
