// HOME PAGE OF APP

import { Text, View, StyleSheet, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocation } from "@/src/context/LocationContext";
import { useEffect, useRef } from "react";

export default function Home() {
  const { location, errorMsg, refreshLocation } = useLocation();

  const mapRef = useRef<MapView | null>(null);

  const DEFAULT_REGION = { // San Fransisco
    latitude: 37.33, 
    longitude: -122,
    latitudeDelta: 2,
    longitudeDelta: 2,
  }

  const INITIAL_REGION = location ? {
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  } : DEFAULT_REGION;

  useEffect(() => {
    if (location && mapRef.current) {
      const newRegion = {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922, // Smaller delta for a zoomed-in view
        longitudeDelta: 0.0421,
      };
      // Animate to the new region (user's location)
      mapRef.current.animateToRegion(newRegion, 10); // 10ms duration
    }
  }, [location]);

  if (errorMsg) return <Text>{errorMsg}</Text>;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>HoopMap</Text>
      <MapView
        style={{ ...styles.map, ...{ opacity: location ? 1 : .6  }}}
        provider = {PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
        ref={mapRef}
      />

      {location ? (<></>) : (
        <Text>Loading location...</Text>
      )}
      <Button title="Refresh Location" onPress={refreshLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  description: {
    fontSize: 6,
    fontWeight: 500,
  },

  map: {
    width: '80%',
    height: '50%',
    borderRadius: 12,
  },

});
