import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';
import MYComponents from './components/MyComponents';

class App extends React.Component {
  render() {
    return (
      <div>
        <MYComponents />
      </div>
    );
  }
}; 


export default App;
