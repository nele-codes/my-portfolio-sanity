import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Project from './components/Project'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="w-full h-full backgroundEffects">
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Home/>} path='/' exact />
        <Route element={<About/>} path='/about' />
        <Route element={<SinglePost/>} path='/post/:slug' />
        <Route element={<Post/>} path='/post' />
        <Route element={<Project/>} path='/project' />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
