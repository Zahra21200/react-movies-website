import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import React, { Component } from 'react';
import { BrowserRouter ,Route,Switch } from 'react-router-dom';
import Navbar from './Components/navbar';
import Notfound from './pages/Notfound';
import MoviePage from './pages/moviePage';
class App extends Component {
  render() {
    return (
    <div className='container'>
     
       <BrowserRouter>
       <Navbar/>

        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={Register} path="/register" exact/>
          <Route component={Login} path="/login" exact/>
          <Route component={MoviePage} path="/movie/:movieId" exact/>
          <Route component={Notfound} path="*"exact/>        
        </Switch>
       </BrowserRouter>
        </div>
    );
  }
}


export default App;
