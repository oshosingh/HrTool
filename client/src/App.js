import './App.scss';
import Login from './components/auth/login';
import Register from './components/auth/register'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/hr/home'
import ProtectedRoute from './Protected'
import EmpCreate from './components/hr/EmpAccountCreate'
import Employee from './components/hr/employee'

function App() {

  return (
          <BrowserRouter basename="">
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <ProtectedRoute path="/home" component={Home} />
                <ProtectedRoute path="/emp" component={EmpCreate} />
                <ProtectedRoute path="/employee"component={Employee} />
                <Route path="*"> 404 Not Found</Route>
              </Switch>
          </BrowserRouter>
  );
}

export default App;
