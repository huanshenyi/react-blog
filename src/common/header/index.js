import React from "react"
import { connect } from "react-redux"
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
       focused: state.focused
    }
};
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(){
          const action = {
              type: "search_focus"
          };
          dispatch(action);
        },
        handleInputBlur(){
            const action = {
                type: "search_blur"
            };
            dispatch(action);
        }
    }
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
