import React from 'react'
import "./Homepage.css"
import Sidenav from './navigation/Slidenav'
import Timeline from './timeline/Timeline'
import Sugesstion from '../src/suggestions/Suggestions'

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
