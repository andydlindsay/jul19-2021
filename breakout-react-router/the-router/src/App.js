import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <h2>React Router</h2>
      <a href="http://www.google.com" target="_blank">Google!</a>
      <Router>
        <Nav/>

        <Switch>
          <Route path="/products">
            <Products propOne="hello"/>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>     
      </Router>
    </div>
  );
};

export default App;
