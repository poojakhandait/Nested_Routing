import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>ybd uwegikdb udg</h1>
        <p>heloo to all </p>
        <div>
            <Link to="/about/">P1</Link>
            <Link to="/about/p2">P2</Link>
            <Link to="/about/p3">P3</Link>
        </div>
        <h2> every thing will be fine</h2>
        <Outlet/>
        <p>prem</p>
    </div>
  )
}

export default About