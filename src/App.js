import Home from './component/Home';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Search from './component/Search';

function App() {
  return (
    <>
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Search" component={Search}></Route>
      </Switch>
    </Router>
    </div>
    </>
  );
}

export default App;
