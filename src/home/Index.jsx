import React, { Component } from 'react';

import Movie from './movie/Index.jsx'
//引入电影页面

//引入底部导航栏
import TabBarui from './ui/TabBarul.jsx';
class Index extends Component {
  render() {
    return (
      <>
        <Movie />
        {/* 底部 */}
        <TabBarui />
      </>
    );
  }
}

export default Index;