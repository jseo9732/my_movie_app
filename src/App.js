import './App.css';
import Header from "./components/Header";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from './routes/Detail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </div>
    </BrowserRouter>
   );
}

export default App;