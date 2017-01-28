import React, { PropTypes as T, Component } from 'react';
import Map, { Marker } from 'google-maps-react';
import classnames from 'classnames';

import styles from './styles.module.css';

class MapComponent extends Component {
  // renderChildren() {
  //   const {children} = this.props;
  // }
  renderMarkers() {
    if (!this.props.places) {
      return null; 
    }
    return this.props.places.map(place => {
      return (
        <Marker key={place.id}
            name={place.id}
            onClick={this.props.onMarkerClick.bind(this)}
            place={place}
            position={place.geometry.location}
        />
      )
    })
  }

  render() {
    return (
      <Map 
        className={styles.map}
        google={this.props.google}
      >

        {this.renderMarkers()}
      </Map>
    )
  }
}

export default MapComponent;