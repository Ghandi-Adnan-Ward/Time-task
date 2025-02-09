/* eslint-disable no-unused-vars */
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ContentGrid from "./components/ContentGrid";
import TimeConverter from "../TimeConverter";
import './App.css'
function App() {
  
  return (
    // <Router>
    //   <div>
    //     <Header />
    //     <Filters />
    //     <ContentGrid />
    //   </div>
    // </Router>
    // <TimeConverter/>
  <TimeConverter/>
   
  );
}

export default App;
