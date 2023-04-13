
import React from 'react'
import { createContext, useState, useEffect } from 'react';
import Main from './Service/Main'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import NotFound from './Service/NotFound';
import CardDetail from './components/Detail/CardDetail';
import MainNav from '../src/components/Navigation/MainNav';
import axios from 'axios';

export const UserContext = createContext();
function App() {
  const [users, setUsers] = useState([ ]);
  const token = localStorage.getItem('auth_token')

  useEffect(() => {
    if(token != null){
    const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:5000/auth/user`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
      );
      if(response.status == 200){
      setUsers(response.data);
      }else{
        console.log("not logged in")
      }
    }
    fetchUsers();
    };

  }, []);

  console.log(users);

  return (
<div className="main">
      <MainNav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/detail' element={<CardDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
