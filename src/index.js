import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import Dome from './page/demo'
import Loyout from './Layout/layout'
import Table from './page/table'
import Redux from './page/redux'
import { Router, Route, Link, hashHistory,IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import '../src/config/globalConfig'

const store = createStore(rootReducer)
function  updateHandle () {  
  console.log('每次router变化之后都会触发')  
}  

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} onUpdate={updateHandle}>
    <Route path="/" component={Loyout}>
      <IndexRoute component={Dome}/> 
      <Route path="/demo" component={Dome}>
      </Route>
      <Route path="/table" component={Table}>
      </Route>
      <Route path="/redux" component={Redux}>
      </Route>
    </Route>
  </Router>
 </Provider>,
  document.getElementById('root')
);