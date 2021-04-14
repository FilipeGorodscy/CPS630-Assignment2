import React, { useCallback, useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from "@react-google-maps/api";
import Geocode from "react-geocode";

const KEY = "AIzaSyCT0erosDR5II_8-FtZMdtCjCC_o5p2msE";
Geocode.setApiKey(KEY);

const Map = ({ setDistance, source, destination }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: KEY,
  });

  const [sourceLatLng, setSourceLatLng] = useState();
  const [destinationLatLng, setDestinationLatLng] = useState();
  const [directions, setDirections] = useState();

  useEffect(() => {
    if (source && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: source,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
            setDistance(parseInt(result.routes[0].legs[0].distance.value / 1000));
          } else {
            console.log("Error Occurred. Status Code: " + status);
          }
        }
      );
    }
    codeSource(source);
    codeDest(destination);
  }, [source, destination, setDistance]);

  const codeSource = async (source = "Toronto") => {
    const sourceRes = await Geocode.fromAddress(source);
    const sourcePos = sourceRes.results[0].geometry.location;
    setSourceLatLng(sourcePos);
  };

  const codeDest = async (destination = "Brampton") => {
    const destRes = await Geocode.fromAddress(destination);
    const destPos = destRes.results[0].geometry.location;
    setDestinationLatLng(destPos);
  };

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
  }, []);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          height: "400px",
        }}
        center={{
          lat: 43.7272,
          lng: -79.4121,
        }}
        zoom={10}
        onLoad={onLoad}
      >
        {source && <Marker position={sourceLatLng} />}
        {destination && <Marker position={destinationLatLng} />}
        <DirectionsRenderer directions={directions} />
      </GoogleMap>
    )
  );
};

export default Map;
