import React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import Main from './home';
import configureStore from './store/configureStore';

function App() {
  return (
    <div className="App">
       <Provider store={configureStore()}>
      <MemoryRouter>
        <div>
          <Switch>
          <Route path='/' exact={true} component={Main} />
          <Route path='/home' exact={true} component={Main} />
          </Switch>
        </div>
      </MemoryRouter>
      </Provider>
    </div>
  );
}

export default App;
