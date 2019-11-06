import axios from "axios";
import * as constants from "./constants"

const changeLogin = ()=>({
   type: constants.CHANGE_LOGIN,
   value:true
});

export const logout = () => ({
   type: constants.LOGOUT,
   value:false
});

export const login = (accout, password) => {
    return (dispach)=> {
        axios.get("http://127.0.0.1:8000/api/login.json?account="+accout+"&password="+ password).then((res)=>{
            const result = res.data.data;
            if (result) {
                dispach(changeLogin())
            }else {
                alert("ログイン失敗")
            }
        })
    }
};
