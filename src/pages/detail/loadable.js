import React from "react";
import Loadable from 'react-loadable';
import { Spin } from 'antd';


const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading(){
        return <div><Spin tip="Loading..."></Spin></div>
    },
});

export default ()=> <LoadableComponent/>;


