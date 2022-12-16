import {Router} from "react-router-dom"
import './App.css';
import Navbar from './components/navbat/Navbar';
import Search from './components/Search/Search';
import Card from './components/Card/Card'
import Sidebar from "./components/Sidebar/Sidebar";
import Card2 from "./components/Card2/Card2";
import Card3 from "./components/Card3/Card3";



function App() {
  return (
    <div className="App">
      {/* <Router>
      <Navbar />
      {/* <Search /> */}
      {/* <Sidebar /> */}


      {/* </Router> */} 
      <Navbar />
      <Search />
      <Sidebar />
       <Card />
       <Card2 />
       <Card3 />
      
      
    
      
    </div>
  );
}

export default App;
