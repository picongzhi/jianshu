import axios from "axios";
import {CHANGE_LOGIN, LOGOUT} from './constants';

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password)
      .then(res => {
        const result = res.data.data;
        if (result) {
          dispatch(changeLogin());
        } else {
          console.log('登录失败');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export const logout = () => ({
  type: CHANGE_LOGIN,
  value: false
});

const changeLogin = () => ({
  type: LOGOUT,
  value: true
});
