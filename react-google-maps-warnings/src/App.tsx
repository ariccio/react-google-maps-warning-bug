import React from 'react';
import './App.css';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 40.769,
  lng: -73.966
};


/*
onEventName = "onClick
googleEventName = "click"

export function registerEvents(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instance: any,
  eventMap: Record<string, string>
): google.maps.MapsEventListener[] {
  const registeredList = reduce(
    eventMap,
    function reducer(
      acc: google.maps.MapsEventListener[],
      googleEventName: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onEventName: any
    ): google.maps.MapsEventListener[] {
      if (typeof props[onEventName] === 'function') {
        acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]))
      }

      return acc
    },
    []
  )

  return registeredList
}

*/
const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAvf-00kEHOEuEs0pcOmEkGfNnpu_NNnDY"
  })

  
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new (window as any).google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
    map.panTo(center);
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  if (!isLoaded) {
    return null;
  }
  return (
      <>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} onLoad={onLoad} onUnmount={onUnmount}>
          { /* Child components, such as markers, info windows, etc. */ }
          <>f</>
        </GoogleMap>
      </>
  );
}

function App() {

  return (
    <div className="App">
      <MapComponent/>
    </div>
  );
}

export default App;
