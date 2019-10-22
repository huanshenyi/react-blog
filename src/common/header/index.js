import React , { Component } from "react"
import { CSSTransition } from "react-transition-group";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from "./style"

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            focused:false
        };
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
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
                         in={this.state.focused}
                         timeout={200}
                         classNames="slide"
                        >
                            <NavSearch
                                className={this.state.focused ? "focused" : ""}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={this.state.focused ? "focused iconfont" : "iconfont"}>&#xe621;</span>
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
    handleInputFocus(){
        this.setState({
            focused: true
        })
    }
    handleInputBlur(){
        this.setState({
            focused: false
        })
    }
}
export default Header;
