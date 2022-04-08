
// import './App.css';
import '../../Day1/Part2/Problem1/System.css';
import Mfg from '../../Day1/Part2/Problem1/Mfg'
import System from '../../Day1/Part2/Problem1/System'
function P1() {
  return (
    <div className="System" >
      <System header="Mobile Operating System" brand1="Android" brand2="Blackberry" brand3="iphone" brand4="Windows Phone"/>
      <Mfg header="Mobile Manufactures" brand1="Samsung" brand2="HTC" brand3="Micromax" brand4="Apple"/>
    </div>
  );
}

export default P1;
