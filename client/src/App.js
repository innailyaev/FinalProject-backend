import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Route,Switch,withRouter} from 'react-router-dom';
import Header from './Components/Header.component.jsx';
import HomePage from './Pages/Homepage.jsx';
import SignUp from './Components/SignUp.jsx';
import LogIn from './Components/LogIn.jsx';
import UserPage from './Components/UserPage.jsx';
import Dashboard from './Components/Dashboard.jsx';
import GetProfile from './Components/GetUserProfile.jsx';


function App() {

  return (
    <div className="App">
      
     <BrowserRouter>
        <Switch>

          <Route path="/hello" exact component={UserPage} />
          <Route path="/profile" exact component={GetProfile}/>

          <div>
            <Header title={'LOGIN'}/>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login"><LogIn /></Route>
            <Route path="/dashboard"><Dashboard/></Route>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
