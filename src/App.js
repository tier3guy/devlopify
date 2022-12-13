import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/Error";
import Footer from "./components/Footer";
import Careers from "./components/Careers";
import PricingComponent from "./components/PricingComponent";
import {Switch, Route} from "react-router-dom";
import { useState } from 'react';

const App = () => {

  const [ display, setDisplay ] = useState('block');

  return (
    <div className="App">
      <Navbar display={display} setDisplay={setDisplay} />
      <Switch>
        <Route exact path="/">
          <Hero display={display} setDisplay={setDisplay}/>
        </Route>
        <Route exact path="/careers">
          <Careers display={display} setDisplay={setDisplay}/>
        </Route>
        <Route exact path="/career">
          <Careers display={display} setDisplay={setDisplay}/>
        </Route>
        <Route exact path="/Career">
          <Careers display={display} setDisplay={setDisplay}/>
        </Route>
        <Route exact path="/pricings">
          <PricingComponent display={display} setDisplay={setDisplay}/>
        </Route>
        <Route exact path="/pricing">
          <PricingComponent display={display} setDisplay={setDisplay}/>
        </Route>
        <Route exact path="/Pricing">
          <PricingComponent display={display} setDisplay={setDisplay}/>
        </Route>
        <Route path={'*'}>
          <ErrorPage errorCode={'503'} display={display} setDisplay={setDisplay}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
