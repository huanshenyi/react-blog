import React, {Component} from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";

class List extends Component{
    render() {
        const { list } = this.props;
        return (
           <div>
               {
                   list.map((item) => {
                       return (
                           <ListItem key={item.get("id")}>
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
               <LoadMore onClick={}>MoreInfo</LoadMore>
           </div>
        )
    }
}
const mapStateToProps = (state) =>({
   list:state.getIn(["home", "articleList"])
});

const mapDispatch = (dispatch)=>({
   getMoreList(){

   }
});
export default connect(mapStateToProps)(List)
