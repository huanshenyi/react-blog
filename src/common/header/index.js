import React , {Component} from "react"
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

class Header extends Component{
    getListArea(){
        const { focused, list, page, mouseIn,totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        for (let i = (page - 1) * 10; i < page*10;i++){
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
        if (focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        人気キーワード
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>チェンジ</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                          pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null
        }
    }
    render() {
        const { focused,handleInputFocus,handleInputBlur } = this.props;
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? "focused" : ""}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? "focused iconfont" : "iconfont"}>&#xe621;</span>
                        {this.getListArea()}
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
    }
}

const mapStateTothis = (state)=> {
    return {
       focused: state.getIn(["header", "focused"]),
       // focused: state.get("header").get("focused")
       list:state.getIn(["header","list"]),
       page:state.getIn(["header","page"]),
       totalPage:state.getIn(["header", "totalPage"]),
       mouseIn:state.getIn(["header", "mouseIn"])
    }
};
const mapDispathTothis = (dispatch) => {
    return {
        handleInputFocus(){
          dispatch(actionCreators.getList());
          dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage){
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page+1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
};
export default connect(mapStateTothis, mapDispathTothis)(Header);
