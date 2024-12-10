import './App.css';
import Cart from './Components/Cart/Cart';
import Dashboard from './Components/Dashboard/Dashboard';
import Myaxios from './Components/Myaxios/Myaxios';
import Navbar from './Components/Navbar/Navbar';
import Timetable from './Components/Timetable/Timetable';
import Time from './Components/Time/Time'
import Monday from './Components/Monday/Monday';
import Sunday from './Components/Sunday/Sunday';

function App() {
  return (
    <div className="App">
     {/* <Myaxios/> */}
     {/* <Navbar/> */}
     {/* <Cart/> */}
     {/* <Dashboard/> */}
      <Timetable/>  
      {/* <Time/>
     <Monday/> */}
     {/* <Sunday/> */}
    </div>
  );
}

export default App;
