import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom';

import ExpensesPage from './expensesPage';
import Home from './home';
import History from './history' ;

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-1 text-center" >Expenses Input</h1>
        <div className="navbar bg-info navbar-info">
          <Link to="/home"><div className="btn-primary btn nav-item text-white">Home</div> </Link>
          <Link to="/submit"><div className="btn-primary btn nav-item text-white">Submit expense</div> </Link>
          <Link to="/history"><div className="btn-primary btn nav-item text-white">Expense History</div> </Link>
        </div>
        <div className="jumbotron" >
          <Route path="/submit" component={ExpensesPage} />
          <Route path="/home" component={Home}/>
          <Route path="/history" component={History}/>

        </div>
      </div>
    );
  }
}

export default App;
