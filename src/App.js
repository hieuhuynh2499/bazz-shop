
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from "./components/footer/Footer";
import Header from './components/header/Header.tsx';
import About from "./containers/about/About";
import Blog from "./containers/blog/Blog";
import Contact from "./containers/contact/Contact";
import Home from "./containers/home/Home";
import Shop from "./containers/shop/Shop";



function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
          <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route>
              <Route path="/">
                <Home />
              </Route>
          </Switch>
          <Footer/>
     </div>
    </Router>
  );
}

export default App;
