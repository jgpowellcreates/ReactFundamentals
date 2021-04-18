import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router //X as Y is a simple way of renaming our imports
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />  {/*Header is outside of Router - it will not be effected by Router changes*/}
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;