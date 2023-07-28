import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//jsx is syntax entension of js
//it allows us to write something that looks like HTML inside JS
class App extends Component {
  constructor(){
    super();
    this.state={
      name: {firstName:"Sanjay",lastName:"kumar"},
      place: "Karimnagar",
    }
  }

  
  render(){
    const clickHandler=()=>{
      this.setState({place:"Hyderabad",name:{firstName:'deekonda',lastName:'sanjay'}})
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name.firstName} {this.state.name.lastName} is from {this.state.place}
          </p>
          <button onClick={()=>{
            clickHandler()
            //this.setState({place:"Hyderabad",name:"sanjay"})//shallow merge
            //setState update state to new memory
          }}>Change</button>
        </header>
      </div>
    );
  }
  
}

export default App;
