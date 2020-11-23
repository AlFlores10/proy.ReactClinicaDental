// IMPORTACIONES 

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './containers/home/Home';
import Register from './containers/register/Register';
import Login from './containers/login/Login';


function App() {
  return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/register" component={Register} exact/>
            <Route path="/login" component={Login} exact />

          </Switch>
        </BrowserRouter>

  );
}

export default App;
