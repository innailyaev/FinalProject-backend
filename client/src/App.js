import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Header from './Components/Header.component';
import HomePage from './Pages/Homepage.jsx';
import SignUp from './Components/SignUp.jsx';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignUp} /> 
 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
