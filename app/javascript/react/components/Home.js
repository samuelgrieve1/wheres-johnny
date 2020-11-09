import React from 'react'
import JohnMap2 from './JohnMap2.js'

export const Home = (props) => {
  return (
    <div className="grid-container fluid">
      <h1 className="page-heading">Johnny Map</h1>
      <div className="grid-x search-and-map-container">
        <div className="cell small-12 medium-4 large-3 search-container">
          <label>Search Map
            <input type="text" placeholder="Address, City or Zip"></input>
          </label>
        </div>
        <div className="cell small-12 medium-8 large-9 map-container"><JohnMap2 /></div>
      </div>
    </div>
  )
}

export default Home