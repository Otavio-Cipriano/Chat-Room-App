import { useState } from 'react';
import './App.css';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './contexts/AuthProvider';


function App() {
  const [logged, setLogged] = useState(false);
  
  return (
    <div className="App">
      <AuthProvider>
        {logged ? <Dashboard handleLogout={setLogged} /> : <Signin handleLogin={setLogged} />}
      </AuthProvider>
    </div>
  );
}

export default App;
