import React, { Fragment } from 'react';
import { Provider } from "react-redux"
import {GlobalStyle} from "./style"
import {Iconfont} from "./statics/iconfont/iconfont"
import Header from "./common/header";
import store from "./store";

function App() {
  return (
    <Fragment>
        <GlobalStyle/>
        <Iconfont/>
        <Provider store={store}>
            <Header/>
        </Provider>
    </Fragment>
  );
}

export default App;
