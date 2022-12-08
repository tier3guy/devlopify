import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/Error";
import Footer from "./components/Footer";
import Careers from "./components/Careers";
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
        <Route path={'*'}>
          <ErrorPage errorCode={'503'}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
