import React from 'react';
import './styles/nomarlize.css'
import './styles/init.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
