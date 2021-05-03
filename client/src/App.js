import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Header from './Components/Header.component.jsx';
import HomePage from './Pages/Homepage.jsx';
import SignUp from './Components/SignUp.jsx';
import LogIn from './Components/LogIn.jsx';
import UserPage from './Components/UserPage.jsx';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={LogIn} /> 
          <Route path="/hello" exact component={UserPage} /> 
 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
