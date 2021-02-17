import { React } from "react";
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import HowToPage from "./components/HowToPage/HowToPage";
import "../src/App.scss";

const App = () => {
  return (
    <div className="App">
      <CssBaseline/>
      
      <Router>
      <Header/>
          <Switch>
            <Route path="/" exact component={TaskList} />
            <Route path="/howto" component={HowToPage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
