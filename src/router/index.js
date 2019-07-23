import React, {Component} from 'react'
import history from '@/history';
import {HashRouter,Switch, Route} from 'react-router-dom'
import asyncComponent from '@/config/asyncComponent'
const App = asyncComponent(() => import("@/pages/app/App"))
const list = asyncComponent(() => import("@/pages/list/list"))
const home = asyncComponent(() => import("@/pages/home/home"))
const noticeInfo = asyncComponent(() => import("@/pages/noticeInfo/noticeInfo"))

const todolist = asyncComponent(() => import("@/pages/todothing/todolist"))
const finishthing = asyncComponent(() => import("@/pages/finishthing/finishthing"))
const todoreadlist = asyncComponent(() => import("@/pages/todoreadlist/todoreadlist"))
const finishreadlist = asyncComponent(() => import("@/pages/finishreadlist/finishreadlist"))

export default class RouteConfig extends Component {
  render () {
    return (
      <HashRouter history={history}>
        <Switch>
           <Route path="/app"  component= {App}/>
           <Route path="/noticeInfo"  component= {noticeInfo}/>
           <Route path="/todolist"  component= {todolist}/>
           <Route path="/finishthing"  component= {finishthing}/>
           <Route path="/todoreadlist"  component= {todoreadlist}/>
           <Route path="/finishreadlist"  component= {finishreadlist}/>
           <Route path="/list"  component= {list}/>
           <Route path="/home"  component= {home}/>
           <Route path="/" exact component= {App}/>
           
        </Switch>
      </HashRouter>
    )
  }
}