import React, { Fragment } from 'react';
import {GlobalStyle} from "./style"
import {Iconfont} from "./statics/iconfont/iconfont"
import Header from "./common/header";

function App() {
  return (
    <Fragment>
        <GlobalStyle/>
        <Iconfont/>
        <Header/>
    </Fragment>
  );
}

export default App;
