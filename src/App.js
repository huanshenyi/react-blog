import React, { Fragment } from 'react';
import { Provider } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"
import {GlobalStyle} from "./style"
import {Iconfont} from "./statics/iconfont/iconfont"
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable.js";
import Login from "./pages/login";
import Writer from "./pages/write";
import store from "./store";

function App() {
  return (
    <Fragment>
        <GlobalStyle/>
        <Iconfont/>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail/:id" exact  component={Detail}></Route>
                <Route path="/write" exact component={Writer}></Route>
                <Route path="/login" exact component={Login}></Route>
            </BrowserRouter>
        </Provider>
    </Fragment>
  );
}

export default App;
