import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';




function App() {
  return (
    <BrowserRouter>
      <Navigation />  
      <Switch>  
      <Route path="/"  component={Home} />
        <Route path="/about" component={About} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
