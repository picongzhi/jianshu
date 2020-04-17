import React, {Component, Fragment} from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {Route, BrowserRouter} from 'react-router-dom';
import {GlobalStyle} from './style';
import {IconFont} from "./statics/iconfont/iconfont";
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle/>
          <IconFont/>

          <Header/>
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}/>
              <Route path='/detail' exact component={Detail}/>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
