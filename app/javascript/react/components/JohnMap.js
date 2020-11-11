import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchBox from './SearchBox.js'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class JohnMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDuNfmFZkyNElnSHibdOkpKHpe-xhuHl5w" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <SearchBox />
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default JohnMap;