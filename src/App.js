
import './App.css';
import Dochome from './Components/Dochome';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Main from './Components/Main';
import PatientA from './Components/PatientA';
function App() {
  return (
    <div className="App">
    <Dochome/>
     <Header/>
     <PatientA/>
     {/* <Hero/> */}
     <Main/>
    </div>
  );
}

export default App;
