import React, {
  Component
} from 'react';
import store from './store';
import {
  Provider
} from 'react-redux';

import {
  GlobalStyle
} from './style';
import {
  IconFont
} from "./statics/iconfont/iconfont";

import Header from './common/header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <IconFont/>
        <Header/>
      </Provider>
    );
  }
}

export default App;
