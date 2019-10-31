import axios from "axios";
import * as constants from "./constants"

const changHomeData = (result)=>({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
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
