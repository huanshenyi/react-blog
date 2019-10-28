import {fromJS} from "immutable";

const defaultState = fromJS({
    topicList: [{
        id:1,
        title:"gin",
        imgUrl:"https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/279da33314daae33b5c118f327d5d8aa08d0c230/large.jpg?1471768439"
    },{
        id:2,
        title:"python",
        imgUrl:"https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/a02fbc137334e63fa01e1df9b4dd0f8283a63ee8/large.jpg?1559694099"
    }]
});

export default (state = defaultState, action)=>{
    switch(action.type) {
        default:
            return state
    }
}
