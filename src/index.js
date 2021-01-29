import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter,Redirect,Route} from 'react-router-dom'
import Home from './pages/Home'
import Friends from './pages/Friends'
import Add from './pages/Add'
import Me from './pages/Me'
import Message from './pages/Message'
import TabBar from './components/tabBar'

ReactDOM.render(
  <div>
    <div>
      <HashRouter>
        <TabBar />
        <Redirect to='/home' />
        <Route path="/home" exact component={Home}></Route>
        <Route path="/friends" exact component={Friends}></Route>
        <Route path="/add" exact component={Add}></Route>
        <Route path="/message" exact component={Message}></Route>
        <Route path="/me" exact component={Me}></Route>
      </HashRouter>
    </div>
  </div>,
  document.getElementById('root')
);


