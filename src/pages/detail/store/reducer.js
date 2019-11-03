import {fromJS} from "immutable";
import  * as constants from "./constants"

const defaultStatus = fromJS({
    title: "Goはプログラミング言語の1つである",
    content: ""
});

export default (state = defaultStatus, action) =>{
    switch (action.type) {
        default:
            return state
    }
}
