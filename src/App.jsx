import { useState } from 'react';
import './App.css';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './contexts/AuthProvider';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { PrivateRoute } from './routes/private/PrivateRoute';


function App() {
  const [logged, setLogged] = useState(false);
  
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Route exact path="/" component={Signin}/>
          <PrivateRoute>
            <Route path="/Dashboard" component={Dashboard}/>
          </PrivateRoute>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
