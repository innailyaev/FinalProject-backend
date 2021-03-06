import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Header from './Components/Header.component.jsx';
import HomePage from './Pages/Homepage.jsx';
import SignUp from './Components/SignUp.jsx';
import LogIn from './Components/LogIn.jsx';
import UserPage from './Components/UserPage.jsx';
import AllUsersPosts from './Pages/AllUsersPosts.jsx';
import GetProfile from './Components/GetUserProfile.jsx';
import CreatePost from './Components/CreatePost.jsx';
import GetAllPosts from './Components/GetAllPosts.jsx';
import Gallery from './Utilities/Gallery';
import Footer from './Components/Footer.jsx';



function App() {

  return (
    <div className="App">
      
     <Router>
        <Switch>
          <Route path="/hello" exact component={UserPage} />
          <Route path="/profile" exact component={GetProfile}/>
          <Route path="/newpost" exact component={CreatePost}/>
          <Route path="/myposts" exact component={GetAllPosts}/>
          <Route path="/gallery" exact component={Gallery}/>
          
          <div>
            <Header title={'LOGIN'}/>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login"><LogIn/></Route>
            <Route path="/allposts"><AllUsersPosts/></Route>
          </div>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
