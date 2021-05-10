import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Header from './Components/Header.component.jsx';
import HomePage from './Pages/Homepage.jsx';
import SignUp from './Components/SignUp.jsx';
import LogIn from './Components/LogIn.jsx';
import Dashboard from './Components/Dashboard.jsx';



function MaunRoutes() {

  return (
    <div className="MaunRoutes">
      
     <Router>
     <Header title={'LOGIN'}/>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login"><LogIn /></Route>
            <Route path="/dashboard"><Dashboard/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default MaunRoutes;
