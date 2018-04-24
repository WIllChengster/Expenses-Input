import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import ExpensesPage from './expensesPage'

class App extends Component {
  render() {
    return (
      <div className="container">
        <ExpensesPage/>
      </div>
    );
  }
}

export default App;
