
// import './App.css';
import './Day1/Problem1/System.css';
import './Day1/Problem2/Buttons.css';
import { JoinUs } from "./Day1/Problem2/Buttons";
import { Settings } from "./Day1/Problem2/Buttons";
import { Login } from "./Day1/Problem2/Buttons";
import { Contact } from "./Day1/Problem2/Buttons";
import { Search } from "./Day1/Problem2/Buttons";
import { Help } from "./Day1/Problem2/Buttons";
import { Home } from "./Day1/Problem2/Buttons";
import { Download } from "./Day1/Problem2/Buttons";
// import Mfg from './Day1/Problem1/Mfg'
function App() {
  return (
    <div className="arrange" >
      <JoinUs />
      <Settings />
      <Login />
      <Contact />
      <Search />
      <Help />
      <Home />
      <Download />
    </div>
  );
}

export default App;
