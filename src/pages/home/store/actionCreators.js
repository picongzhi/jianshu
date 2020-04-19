import axios from "axios";
import {fromJS} from 'immutable'
import {CHANGE_HOME_DATA, ADD_ARTICLE_LIST, TOGGLE_SCROLL_TOP} from './constants';

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then(res => {
        const result = res.data.data;
        dispatch(changeHomeData(result));
      })
      .catch(err => {
        console.error(err);
      });
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page)
      .then(res => {
        const result = res.data.data;
        dispatch(addHomeList(result, page + 1));
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export const toggleTopShow = (show) => ({
  type: TOGGLE_SCROLL_TOP,
  show: show
});

const changeHomeData = (result) => ({
  type: CHANGE_HOME_DATA,
  topicList: fromJS(result.topicList),
  articleList: fromJS(result.articleList),
  recommendList: fromJS(result.recommendList)
});

const addHomeList = (result, nextPage) => ({
  type: ADD_ARTICLE_LIST,
  list: fromJS(result),
  nextPage: nextPage
});
