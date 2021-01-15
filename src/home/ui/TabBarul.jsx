import React, { Component }from 'react';
import { TabBar } from 'antd-mobile';

// const Movie = lazy(() => import('./movie/Index'));
// const Video = lazy(() => import('./video/Index'));
// const Show = lazy(() => import('./show/Index'));
// const Mine = lazy(() => import('./mine/Index'));


class TabBarul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      // hidden: false,
      fullScreen: true,
    };
  }
  render() {
    return (
      <>
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#f03d37"
          barTintColor="white"
          // hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="电影"
            key="Movie"
            icon={
              <span className="iconfont icon-dianyingyuan"></span>
            }
            selectedIcon={
              <span className="iconfont icon-dianyingyuan"></span>
            }
            selected={this.state.selectedTab === 'blueTab'}
            /* badge={1} */
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
   {/*          {this.renderContent('Life')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <span className="iconfont icon-shipin"></span>
            }
            selectedIcon={
              <span className="iconfont icon-shipin"></span>
            }
            title="视频"
            key="Video"
            /* badge={'new'} */
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
          {/*   {this.renderContent('Koubei')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <span className="iconfont icon-shipin1"></span>
            }
            selectedIcon={
              <span className="iconfont icon-shipin1"></span>
            }
            title="小视频"
            key="Small-Video"
            /* dot */
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
           {/*  {this.renderContent('Friend')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <span className="iconfont icon-dianyingpiao"></span>
            }
            selectedIcon={
              <span className="iconfont icon-dianyingpiao"></span>
            }
            title="演出"
            key="Show"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {/* {this.renderContent('My')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <span className="iconfont icon-wode"></span>
            }
            selectedIcon={
              <span className="iconfont icon-wode"></span>
            }
            title="我的"
            key="Mine"
            selected={this.state.selectedTab === 'MineTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'MineTab',
              });
            }}
          >
            {/* {this.renderContent('My')} */}
          </TabBar.Item>
        </TabBar>
      </div>
    </>
  );
  }
}


export default TabBarul;