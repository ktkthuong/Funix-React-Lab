import React, { Component } from 'react';

import Main from './components/MainComponent';
//import StaffList from './StaffListComponent';
//import { STAFFS } from './shared/staffs';
import './App.css';
import {BrowserRouter} from 'react-router-dom';



class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     staffs:STAFFS
  //   };
  // }



  render(){
    return (
      <BrowserRouter>
        <div className="App">
          
          <Main />
          
        </div>
      </BrowserRouter>
    );
  }  
}

export default App;
