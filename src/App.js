import React from 'react';
import Routes from "./routes.js";
import "./styles.css";
/* import api from "./services/api"; */
/* import Main from "./pages/main/index"; */
import Header from './components/Header';

const App = () => (

   <div className="App">
   <Header/>
   <Routes/>
    </div>

  
);



export default App;
