import React, {Component} from "react";
import {connect} from "react-redux";
import Topic from "./components/Topic";
import Recommend from "./components/Recommend";
import List from "./components/List";
import Writer from "./components/Writer";
import axios from "axios";

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from "./style";

class Home extends Component{
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="img" src="https://www.edureka.co/blog/wp-content/uploads/2018/09/Golang-Tutorial.jpg"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
      this.props.changeHomeData();
    }
}
const mapDispatch =(dispatch)=>({
    changeHomeData(){
        axios.get("http://127.0.0.1:8000/api/home.json").then((res)=>{
            const result = res.data.data;
            const action = {
                type: "change_home_data",
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            };
            dispatch(action);
        });
    }
});

export default connect(null,mapDispatch)(Home);
