import React from 'react'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile"
import Body from './components/Body';
import Feed from './components/Feed'
import Connections from './components/Connections';
import Requests from './components/Requests';
import Chat from './components/Chat'
import Premium from './components/Premium';
const App = () => {
  return (
    <div>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/" element={<Feed/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path = "/profile" element={<Profile/>}/>
          <Route path = "/connections" element={<Connections/>}/>
          <Route path = "/requests" element={<Requests/>}/>
          <Route path = "/chat/:targetUserId" element={<Chat/>}/>
          <Route path = "/premium" element={<Premium/>}/>
          
        </Route>    
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App