import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { KaleidoscopeData } from "../api/graphql-kaleidoscope";
import { kaleidoscopeAppContext } from "../context/city-context";

const Map: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;

  const [zoom, setZoom] = useState<number>(5);

  useEffect(() => {
    setTimeout((e) => {
      setZoom(5);
    }, 2000);
  }, []);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: data?.lat || 0,
    lng: data?.long || 0,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDhPb6HK_o1qMR1XOMZlZIcapn0WOs0T9s",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
