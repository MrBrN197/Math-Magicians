import { Switch, Route } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Header from './components/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>
  </>
);

export default App;
