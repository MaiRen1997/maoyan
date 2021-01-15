import React from 'react';
import { NavBar } from 'antd-mobile';
const NavBarui = () => {
  return (
    <>
      <NavBar
        mode="dark"
        style ={{ background:'#e54847' }}
        rightContent={[
          <span 
            className="iconfont icon-menu" 
            style = {{fontSize : '22px'}}
            key = '0'
          ></span>
          ]}
      >猫眼电影</NavBar>
    </>
  );
}

export default NavBarui;