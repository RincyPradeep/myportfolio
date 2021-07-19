import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home/Home'
import About from '../About/About';
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Navbar from '../Navbar/Navbar';
import GoHome from '../GoHome/GoHome';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/myportfolio' component={Home} />
        <Route path="/myportfolio/about" component={About} />
        <Route path='/myportfolio/projects' component={Projects} /> 
        <Route path='/myportfolio/skills' component={Skills} />
        <Route path='/myportfolio/contact' component={Contact} />
        <GoHome />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
