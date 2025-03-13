import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'


const App = () =>{

  const [sidebar,setSidebar] = useState(true);
  const [query,setQuery] = useState('');



  return(
    <div>
      <Navbar setSidebar ={setSidebar} setQuery={setQuery}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} query={query} setQuery={setQuery} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App