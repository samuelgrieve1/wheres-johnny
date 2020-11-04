import React from 'react'

// import {Loader, LoaderOptions} from 'google-maps';
const {Loader} = require('google-maps');
 
// const options: LoaderOptions = {/* todo */};
const loader = new Loader('AIzaSyDuNfmFZkyNElnSHibdOkpKHpe-xhuHl5w');
 
loader.load().then(function (google) {
  const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
  });
});

export const JohnMap = (props) => {
  return (
    <div>
      <div id="map"></div>
    </div>
  )
}
 
export default JohnMap