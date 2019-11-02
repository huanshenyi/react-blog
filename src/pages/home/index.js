import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Topic from "./components/Topic";
import Recommend from "./components/Recommend";
import List from "./components/List";
import Writer from "./components/Writer";
import { actionCreators } from "./store"

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from "./style";

class Home extends PureComponent{

    handleScrollTop(){
        window.scrollTo(0,0)
    }
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
                { this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null }
            </HomeWrapper>
        )
    }
    componentDidMount() {
      this.props.changeHomeData();
      this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener("scroll", this.props.changeScrollTopShow)
    }
}

const mapState = (state)=>({
    showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch =(dispatch)=>({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    },
    changeScrollTopShow(){
        if (document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});

export default connect(mapState,mapDispatch)(Home);
