import React, {Component, Fragment} from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {Route, BrowserRouter} from 'react-router-dom';
import {GlobalStyle} from './style';
import {IconFont} from "./statics/iconfont/iconfont";
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle/>
          <IconFont/>

          <BrowserRouter>
            <div>
              <Header/>
              <Route path='/' exact component={Home}/>
              <Route path='/detail/:id' exact component={Detail}/>
              <Route path='/login' exact component={Login}/>
              <Route path='/write' exact component={Write}/>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
