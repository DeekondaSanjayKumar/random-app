import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//jsx is syntax entension of js
//it allows us to write something that looks like HTML inside JS
class App extends Component {
  constructor(){
    super();
  }

  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hello hohohohohoho
          </p>
        </header>
      </div>
    );
  }
  
}

export default App;
