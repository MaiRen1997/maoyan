import React, { Component,lazy,Suspense }from 'react';
import { TabBar } from 'antd-mobile';

const Movie = lazy(() => import('../movie/Index'));
const Video = lazy(() => import('../video/Index'));
const SmallVideo = lazy(() => import('../smallVideo/Index'));
const Show = lazy(() => import('../show/Index'));
const Mine = lazy(() => import('../mine/Index'));


class TabBarul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
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
            <Suspense fallback={<div>loading..</div>}>
              <Movie />
            </Suspense>
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
            <Suspense fallback={<div>loading..</div>}>
              <Video />
            </Suspense>
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
           <Suspense fallback={<div>loading..</div>}>
              <SmallVideo />
            </Suspense>
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
            <Suspense fallback={<div>loading..</div>}>
              <Show />
            </Suspense>
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
            <Suspense fallback={<div>loading..</div>}>
              <Mine />
            </Suspense>
          </TabBar.Item>
        </TabBar>
      </div>
    </>
  );
  }
}


export default TabBarul;