
import React from 'react'
import Main from './Service/Main'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import NotFound from './Service/NotFound';
import Dashboard from './Service/Dashboard';
import CardDetail from './components/Detail/CardDetail';
import MainNav from '../src/components/Navigation/MainNav';

function App() {
  return (
<div className="main">
    <Router>
      <MainNav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/detail' element={<CardDetail/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
