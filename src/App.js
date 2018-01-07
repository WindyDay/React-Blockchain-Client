import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

// import registerServiceWorker from './registerServiceWorker';
// import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Main from './Main'


class App extends Component {
  render() { 
    return(
      < div > 
        <Header/> 
        <Main/> 
      </div>
    );
  }
}

export default App;

