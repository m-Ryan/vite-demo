import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Frame from '@/components/Frame';
import Home from '@/pages/home';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Frame>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </Frame>
    </Provider>


  )
}