import React from "react"
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group"
import  { actionCreators }  from "./store"
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Addition,
    Button
} from "./style"

const getListArea = (show)=>{
    if (show){
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    人気キーワード
                    <SearchInfoSwitch>チェンジ</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>Python</SearchInfoItem>
                    <SearchInfoItem>Go</SearchInfoItem>
                    <SearchInfoItem>React</SearchInfoItem>
                    <SearchInfoItem>Flutter</SearchInfoItem>
                    <SearchInfoItem>TypeScript</SearchInfoItem>
                    <SearchInfoItem>Vue.js</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    }else {
        return null
    }
};

const Header = (props) => {
   return (
       <HeaderWrapper>
           <Logo />
           <Nav>
               <NavItem className="left active">ホーム</NavItem>
               <NavItem className="left">ダウンロード</NavItem>
               <NavItem className="right">ログイン</NavItem>
               <NavItem className="right">
                   <span className="iconfont">&#xe602;</span>
               </NavItem>
               <SearchWrapper>
                   <CSSTransition
                       in={props.focused}
                       timeout={200}
                       classNames="slide"
                   >
                       <NavSearch
                           className={props.focused ? "focused" : ""}
                           onFocus={props.handleInputFocus}
                           onBlur={props.handleInputBlur}
                       ></NavSearch>
                   </CSSTransition>
                   <span className={props.focused ? "focused iconfont" : "iconfont"}>&#xe621;</span>
                   {getListArea(props.focused)}
               </SearchWrapper>
           </Nav>
           <Addition>
               <Button className="writting">
                   <span className="iconfont">&#xe601;</span>
                   投稿する
               </Button>
               <Button className="reg">登録</Button>
           </Addition>
       </HeaderWrapper>
   )
};

const mapStateToProps = (state)=> {
    return {
       focused: state.getIn(["header", "focused"])
       // focused: state.get("header").get("focused")
    }
};
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(){
          dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
