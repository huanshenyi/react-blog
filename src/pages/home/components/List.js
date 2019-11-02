import React, {Component} from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store"

class List extends Component{
    render() {
        const { list, getMoreList, page} = this.props;
        return (
           <div>
               {
                   list.map((item, index) => {
                       return (
                           <ListItem key={index}>
                               <img
                                   className="pic"
                                   alt="img"
                                   src={item.get("imgUrl")}/>
                               <ListInfo>
                                   <h3 className="title">{item.get("title")}</h3>
                                   <p className="desc">{item.get("desc")}</p>
                               </ListInfo>
                           </ListItem>
                       )
                   })
               }
               <LoadMore onClick={() =>getMoreList(page)}>MoreInfo</LoadMore>
           </div>
        )
    }
}
const mapStateToProps = (state) =>({
   list: state.getIn(["home", "articleList"]),
   page: state.getIn(["home", "articlePage"])
});

const mapDispatch = (dispatch)=>({
   getMoreList(page){
      dispatch(actionCreators.getMoreList(page))
   }
});
export default connect(mapStateToProps, mapDispatch)(List)
