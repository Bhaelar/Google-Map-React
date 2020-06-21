import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }}>
      {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lon }} />}
    </GoogleMap>
  ))
);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      lon: null,
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => this.setState ({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }));

    
  }

  

	render () {
		return (
			<div className="App">
				<div className="text-center">
					<h1>GOOGLE MAPS API with REACT JS</h1>
				</div>
				<div className="container" style={{margin: `100px auto`}}>
					<div className="row">
						<div className="col-12">
							
							<div>
								<MyMapComponent
                  isMarkerShown
                  lat={this.state.lat}
                  lon={this.state.lon}
									googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsg_JJLuQmzsMYVZDpPR8wToxMLyziv1w&v=3.exp&libraries=geometry,drawing,places"
									loadingElement={<div style={{ height: `100%` }} />}
									containerElement={<div style={{ height: `400px` }} />}
									mapElement={<div style={{ height: `100%` }} />}
								/>
							</div>
						</div>
					</div>
				</div>
        <div className="footer">
          <p>Developed by <a href="http://bhaelar.github.io" target="__blank">Bhaelar</a></p>
        </div>
			</div>
		);
	}
}

export default App;
