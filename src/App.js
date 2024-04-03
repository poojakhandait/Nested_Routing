import {BrowserRouter,Route,Routes}from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import P1 from "./P1"
import P2 from "./P2"
import P3 from "./P3"
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}>
        <Route path="/about/"element={<P1/>}/>
        <Route path="/about/p2"element={<P2/>}/>
        <Route path="/about/p3"element={<P3/>}/>
    </Route>
      <Route path="/login"element={<Login/>}/>
      
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
