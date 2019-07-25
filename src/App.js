import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './Form'
import Thanks from './Thanks'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Form}></Route>
        <Route path="/thankyou" component={Thanks}></Route>
      </Router>
    )
  }
}

export default App;
