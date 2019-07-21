import React, {Component} from 'react'
import history from '@/history';
import {HashRouter,Switch, Route} from 'react-router-dom'
import asyncComponent from '@/config/asyncComponent'
const App = asyncComponent(() => import("@/pages/app/App"))
const list = asyncComponent(() => import("@/pages/list/list"))
const todolist = asyncComponent(() => import("@/pages/todothing/todolist"))
export default class RouteConfig extends Component {
  render () {
    return (
      <HashRouter history={history}>
        <Switch>
           <Route path="/app"  component= {App}/>
           <Route path="/todolist"  component= {todolist}/>
           <Route path="/list"  component= {list}/>
           <Route path="/" exact component= {App}/>

        </Switch>
      </HashRouter>
    )
  }
}