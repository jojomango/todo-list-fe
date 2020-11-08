
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
const Home = lazy(() => import('./routes/Home'));
const Todo = lazy(() => import('./routes/Todo'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/todo" component={Todo}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
