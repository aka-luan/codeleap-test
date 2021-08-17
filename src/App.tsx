import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" component={SignUp}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
        
        <GlobalStyle />
      </div>
    </Router>

  );
}

export default App;
