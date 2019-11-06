import React,{ Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";


class Write extends Component{
   render() {
       const { loginStatus } = this.props;
       if(loginStatus){
           return(
               <div>投稿ページ</div>
           )
       }else {
           return <Redirect to="/login" />
       }
   }
}

const mapStateToProps = (state)=>({
     loginStatus: state.getIn(["login", "login"])
});

export default connect(mapStateToProps, null)(Write);
