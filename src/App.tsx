import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/signup" component={SignUp}/>
        <Route path="/dashboard" component={Dashboard}/>
        <GlobalStyle />
      </div>
    </Router>

  );
}

export default App;
