import React, {Component} from "react"
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {
    DetailWrapper,
    DetailLeft,
    Header,
    Content,
    DetailRight,
    WriterWrapper
} from "./style";

class Detail extends Component{
    render() {
        return (
            <DetailWrapper>
                <DetailLeft>
                    <Header>{this.props.title}</Header>
                    <Content dangerouslySetInnerHTML={{
                        __html:this.props.content
                    }}>
                    </Content>
                </DetailLeft>
                <DetailRight>
                    <WriterWrapper>
                        <img src="https://tpc.googlesyndication.com/simgad/575115139343167132" alt=""/>
                    </WriterWrapper>
                </DetailRight>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}
const mapStateToProps = (state) =>({
   title:state.getIn(["detail","title"]),
   content:state.getIn(["detail","content"])
});

const mapDispatch = (dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapStateToProps,mapDispatch)(Detail);
