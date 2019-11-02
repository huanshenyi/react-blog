import axios from "axios";
import * as constants from "./constants"
import { fromJS } from "immutable";


const changHomeData = (result)=>({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});
//ページネーション使用する場合
//const addHomeList = (result, nextPage)=>({
const addHomeList = (result)=>({
   type: constants.ADD_HOME_LIST,
   list: fromJS(result)
    //ページネーション使用する場合
   //nextPage
});

export const getHomeInfo = () => {
  return (dispatch)=>{
      axios.get("http://127.0.0.1:8000/api/home.json").then((res)=>{
          const result = res.data.data;
          const action = changHomeData(result);
          dispatch(action);
      });
  }
};

// page->ページネーション
export const getMoreList = (page)=> {
  return (dispatch)=>{
      //もしページネーション使用する場合
      //axios.get("http://127.0.0.1:8000/api/homeList.json?page=" + page).
      axios.get("http://127.0.0.1:8000/api/homeList.json").then((res)=>{
          const result = res.data.data;
          // もしページネーション使用する場合
          // dispatch(addHomeList(result, page + 1))
          const action = addHomeList(result);
          dispatch(action)
      });
  }
};

export const toggleTopShow = (show) => ({
  type:constants.TOGGLE_SCROLL_TOP,
  show
});
