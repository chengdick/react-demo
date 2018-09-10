import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import Dome from './page/demo'
import Loyout from './Layout/layout'
import Ceshi from './page/ceshi'
import { Router, Route, Link, hashHistory,IndexRoute } from 'react-router'

import '../src/config/globalConfig'

function  updateHandle () {  
  console.log('每次router变化之后都会触发')  
}  


ReactDOM.render(
  <Router history={hashHistory} onUpdate={updateHandle}>
   <Route path="/" component={Loyout}>
    <IndexRoute component={Dome}/> 
     <Route path="/demo" component={Dome}>
     </Route>
     <Route path="/ceshi" component={Ceshi}>
     </Route>
  </Route>
 </Router>,
  document.getElementById('root')
);