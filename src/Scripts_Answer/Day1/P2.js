
// import './App.css';
import '../../Day1/Part2/Problem2/Buttons.css';
import {JoinUs} from '../../Day1/Part2/Problem2/Buttons'
import {Settings} from '../../Day1/Part2/Problem2/Buttons'
import {Login} from '../../Day1/Part2/Problem2/Buttons'
import {Contact} from '../../Day1/Part2/Problem2/Buttons'
import {Search} from '../../Day1/Part2/Problem2/Buttons'
import {Help} from '../../Day1/Part2/Problem2/Buttons'
import {Home} from '../../Day1/Part2/Problem2/Buttons'
import {Download} from '../../Day1/Part2/Problem2/Buttons'
function P2() {
  return (
    <div className="arrange" >
     <JoinUs name="JOIN US"/>
     <Settings name="SETTINGS"/>
     <Login name="LOGIN"/>
     <Contact name="CONTACT US"/>
     <Search name="SEARCH"/>
     <Help name="HELP"/>
     <Home name="HOME"/>
     <Download name="DOWNLOAD"/>
    </div>
  );
}

export default P2;
