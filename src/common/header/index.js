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
        if (this.props.focused){
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        人気キーワード
                        <SearchInfoSwitch>チェンジ</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item)=>{
                               return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null
        }
    }
    render() {
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
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? "focused" : ""}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={this.props.focused ? "focused iconfont" : "iconfont"}>&#xe621;</span>
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
       list:state.getIn(["header","list"])
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
        }
    }
};
export default connect(mapStateTothis, mapDispathTothis)(Header);
