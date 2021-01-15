import React, { Component } from 'react';

//引入顶部导航栏
import  NavBarui from './ui/NavBar.jsx';
//引入tab切换栏
import SelectBar from './ui/SelectBar.jsx';
//引入路由
import { Switch, Route, Redirect } from 'react-router-dom';
import Hot from './hot/Index.jsx';
import Cinema from "./cinema/Index";
import Wait from "./wait/Index";
import Classic from "./classic/Index";
class Index extends Component {
  render() {
    return (
      <>
      {/* 顶部导航栏 */}
        <NavBarui />
      {/* 顶部tab切换栏 */}
        <SelectBar />
      <Switch>
        <Redirect from="/" to="/hot" exact></Redirect>
        <Route path = '/hot'>
          <Hot></Hot>
        </Route>
        <Route path = '/cinema'>
          <Cinema></Cinema>
        </Route>
        <Route path = '/wait'>
          <Wait></Wait>
        </Route>
        <Route path = '/classict'>
          <Classic></Classic>
        </Route>
      </Switch>
      </>
    );
  }
}

export default Index;