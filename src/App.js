import logo from './logo.svg';
import './App.css';
import Student from './Student';
import { User } from './Student1';
import { Department } from './Student2';
import Person from './Student3';
import Staff from './Student4';
// import { HDFC } from './HDFC';
import HDFC from './HDFC';
import Sample from './HDFC'  
// you can assign to variable called sample and display
// import { Axis } from './Axis';
import Axis from './Axis';
// import { ICICI } from './ICICI';
import ICICI, { Anju, Sanju } from './ICICI';
// import { SBI } from './SBI';
import SBI from './SBI';
// import { Canara } from './Canara';
import Canara from './Canara';
import { Ganga } from './Ganga';
import { Yamuna } from './Yamuna';
import { Cauvery } from './Cauvery';
import { Godavari } from './Godavari';
import { Brahmaputra } from './Brahmaputra';
function App() {
  return (
  <div className="App">
<Student/>
<User/>
<Department/>
<Person/>
<Staff/>
<HDFC/>
<Sample/>
<Axis/>
<ICICI/>
{/* <Anju/>
<Sanju/> */}
<SBI/>
<Canara/>
<Ganga/>
<Yamuna/>
<Cauvery/>
<Godavari/>
<Brahmaputra/>






    </div>
  );
}

export default App;
