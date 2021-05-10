import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route,Switch,withRouter} from 'react-router-dom';
import Header from './Components/Header.component.jsx';
import HomePage from './Pages/Homepage.jsx';
import SignUp from './Components/SignUp.jsx';
import LogIn from './Components/LogIn.jsx';
import UserPage from './Components/UserPage.jsx';
import Dashboard from './Components/Dashboard.jsx';
import GetProfile from './Components/GetUserProfile.jsx';
import CreatePost from './Components/CreatePost.jsx';
import HamburgerMenu from './Utilities/HamburgerMenu';
import GetAllPosts from './Components/GetAllPosts.jsx';



function App() {

  return (
    <div className="App">
      
     <Router>
       {/* <HamburgerMenu/> */}
        <Switch>
        
          <Route path="/hello" exact component={UserPage} />
          <Route path="/profile" exact component={GetProfile}/>
          <Route path="/newpost" exact component={CreatePost}/>
          <Route path="/myposts" exact component={GetAllPosts}/>

          <div>
            <Header title={'LOGIN'}/>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login"><LogIn /></Route>
            <Route path="/dashboard"><Dashboard/></Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
