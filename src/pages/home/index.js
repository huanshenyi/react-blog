import React, {Component} from "react"
import Topic from "./components/Topic";
import Recommend from "./components/Recommend";
import List from "./components/List";
import Writer from "./components/Writer";

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
}
export default Home
