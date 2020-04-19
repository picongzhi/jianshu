import axios from "axios";
import {CHANGE_HOME_DATA} from './constants';

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

const changeHomeData = (result) => ({
  type: CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

