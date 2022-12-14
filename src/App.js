import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path='/search'>
           <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        

        </Switch>

        <Footer />
      </Router>


    </div>
  );
}

export default App;
