import React, { Component } from 'react';

import LeftScroll from './ui/LeftScroll';

import { connect } from 'react-redux';
import { getRatedListAsync } from '../../../store/actionCreate';

const mapStateToProps = state => {
  return {
    ratedList: state.get('ratedList')
  }
}

const mapDispatchToProps = dispatch => {
  // console.log(1);
  return {
    getData() {
      dispatch(getRatedListAsync())
    }
  }
}

// @connect(mapStateToProps, mapDispatchToProps)
class Index extends Component {

  render() {
    return (
      <div>
        <LeftScroll ratedList={this.props.ratedList}/>
        {
          //  console.log(this.props.title)
        }
      </div>
    );
  }

  componentDidMount() {
    this.props.getData()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);