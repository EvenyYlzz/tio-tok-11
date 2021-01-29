import React,{ useState } from 'react'
import './tabBar.css'
import {Link, HashRouter,Redirect,Route} from 'react-router-dom'

function tabBar(props) {
    return (
        <div className="tabBar">
          <Link to="/home" className="item"><span>首页</span></Link>
          <Link to="/friends" className="item"><span>熟人</span></Link>
          <Link to="/add" className="item"><span>+</span></Link>
          <Link to="/message" className="item"><span>消息</span></Link>
          <Link to="/me" className="item"><span>我</span></Link>
        </div>
    )
}

export default tabBar