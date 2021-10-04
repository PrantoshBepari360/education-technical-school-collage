import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Service from "./components/Service/Service";
import Skills from "./components/Skills/Skills";
import Header from "./components/Header/Header";
import AboutDetails from "./components/AboutDetails/AboutDetails";
import ServiceDetails from "./ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/about/:id">
            <AboutDetails></AboutDetails>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/service/:Id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route exact path="/skills">
            <Skills></Skills>
          </Route>
          <Route exact path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
