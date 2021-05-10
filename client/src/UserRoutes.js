import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import UserPage from './Components/UserPage.jsx';
import GetProfile from './Components/GetUserProfile.jsx';
import CreatePost from './Components/CreatePost.jsx';
import HamburgerMenu from './Utilities/HamburgerMenu';
import GetAllPosts from './Components/GetAllPosts.jsx';


function UserRautes() {

  return (
    <div className="UserRautes">
      
     <Router>
         <HamburgerMenu/>
        <Switch>
          <Route path="/hello" exact component={UserPage} />
          <Route path="/profile" exact component={GetProfile}/>
          <Route path="/newpost" exact component={CreatePost}/>
          <Route path="/myposts" exact component={GetAllPosts}/>
        </Switch>
      </Router>
    </div>
  );
}

export default UserRautes;
