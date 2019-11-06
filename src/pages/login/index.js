import React, {PureComponent} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store"
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from "./style";

class Login extends PureComponent {
    render() {
        const { loginStatus } =this.props;
        if (!loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="アカウント" ref={(input)=>{this.account = input}} />
                        <Input placeholder="パスワード" type="password" ref={(input)=>{this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account,this.password)}>ログイン</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Redirect to="/" />
        }
    }
}

const mapState =(state)=>({
    loginStatus:state.getIn(["login", 'login'])
});

const mapDispatchToProps = (dispatch)=>({
    login(accountElem, passwordElem){
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
});

export default connect(mapState, mapDispatchToProps)(Login)
