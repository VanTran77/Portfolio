import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Pages/Homepage';
import AboutMe from './components/Pages/AboutMe';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Skills from './components/Pages/Skills';
import Portfolio from './components/Pages/Portfolio';
import Experience from './components/Pages/Experience';
import Education from './components/Pages/Education'
import Contact from './components/Pages/Contact';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/About' component={AboutMe} />
      <Route path='/Experience' component={Experience} />
      <Route path='/Skills' component={Skills} />
      <Route path='/Portfolio' component={Portfolio} />
      <Route path='/Education' component={Education} />
      <Route path='/Contact' component={Contact} /> 
    </Switch>
    <Footer />
  </BrowserRouter>

  );
}

export default App;
