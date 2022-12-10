import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/Error";
import Footer from "./components/Footer";
import Careers from "./components/Careers";
import PricingComponent from "./components/PricingComponent";
import {Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Hero/>
        </Route>
        <Route exact path="/careers">
          <Careers/>
        </Route>
        <Route exact path="/career">
          <Careers/>
        </Route>
        <Route exact path="/Career">
          <Careers/>
        </Route>
        <Route exact path="/pricings">
          <PricingComponent/>
        </Route>
        <Route exact path="/pricing">
          <PricingComponent/>
        </Route>
        <Route exact path="/Pricing">
          <PricingComponent/>
        </Route>
        <Route path={'*'}>
          <ErrorPage errorCode={'503'}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
