import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/Error";
import Footer from "./components/Footer";
import {Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hero}/>
        <Route path={'*'} component={(props) => <ErrorPage {...props} errorCode={'503'}/>} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
