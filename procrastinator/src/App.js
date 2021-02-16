import { React } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import "../src/App.scss";

const App = () => {
  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
      <TaskList/>
    </div>
  );
}

export default App;
