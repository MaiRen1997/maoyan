import React, { Component } from 'react';
//引入样式
import { SelectBarStyle } from '../styles.js';
//引入路由NavLink
import { NavLink } from 'react-router-dom'
class SelectBar extends Component {
  state = { 
    List:[
      {
        title:'热映',
        path:'/hot'
      },
      {
        title:'影院',
        path:'/cinema'
      },
      {
        title:'待映',
        path:'/wait'
      },
      {
        title:'经典电影',
        path:'/classic'
      }
    ]
  }
  render() {
    return (
      <SelectBarStyle>
          {/* 左边地址选项 */}
        <div className= 'address'>
          南京
          <span className ='iconfont icon-youjiantou'></span>
        </div>
        {/* 中间点击链接 */}
        <ul>
          {
          this.state.List.map(item=>{
            return (
                <li key={item.title}>
                  <NavLink to={ item.path }>
                    { item.title }
                  </NavLink>   
                </li>  
            )
          })
          }
        </ul>
        {/* 右边放大镜 */}
        <div className='search'>
          <span className = 'iconfont icon-icon-test'></span>
        </div>
      </SelectBarStyle>
    );
  }
}

export default SelectBar;