import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Views/Home';
import Detail from './Views/Detail';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:option' component={Detail} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;
