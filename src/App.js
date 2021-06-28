import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About';
import Gmail from './Pages/Gmail';
import Images from './Pages/Images';
import Store from './Pages/Store';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about"  >
          <About/>
        </Route>
        <Route path="/store">
          <Store/>
        </Route>
        <Route path="/gmail">
          <Gmail/>
        </Route>
        <Route path="/images">
          <Images/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
