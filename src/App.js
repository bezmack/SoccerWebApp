import React, {Component} from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';

class App extends Component{
  constructor(){
    super() 
    
    }

    render(){
      return (
        <div className="App">
          <AppRouter />
        </div>
      );
    }
}


export default App;
