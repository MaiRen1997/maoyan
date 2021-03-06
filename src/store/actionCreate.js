import { GET_RATED_LIST } from './actionTypes';
import { getRatedListApi } from '../utils/api';

// 同步方法
const getRatedList = (list) => {
  return {
    type: GET_RATED_LIST, 
    list:list 
  }
}

// 异步方法
const getRatedListAsync = () => {
  return async dispatch => {
    const res = await getRatedListApi();
    // console.log(res.status);
    if (res.status === 0) {
      dispatch(getRatedList(res.result));
    }
    else {
    }
  }
}

export {
  getRatedListAsync
}