import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return <div>
      <h2>Featured Images</h2>
      <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/test">test</Link>
        </li>
      </ul>
    </div>
}

export default Home
