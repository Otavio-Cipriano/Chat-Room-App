import './App.css';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './contexts/AuthProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './routes/private/PrivateRoute';
import { LoginRoute } from './routes/LoginRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <LoginRoute>
            <Route exact path="/" component={Signin} />
          </LoginRoute>
          <PrivateRoute>
            <Route path="/Dashboard" component={Dashboard} />
          </PrivateRoute>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
