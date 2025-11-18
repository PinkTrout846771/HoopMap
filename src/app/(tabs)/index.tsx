// HOME PAGE OF APP

import { useLocation } from "@/src/context/LocationContext";
import { useEffect, useRef } from "react";
import { Button } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import React from "react";
import Box from "../../components/common/Box";
import Text from "../../components/common/Text";

export default function Home() {
  const { location, errorMsg, refreshLocation } = useLocation();

  const mapRef = useRef<MapView | null>(null);

  const DEFAULT_REGION = {
    // San Fransisco
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  const INITIAL_REGION = location
    ? {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    : DEFAULT_REGION;

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
    <Box
      flex={1} // fill the screen
      justifyContent="center" // center content vertically
      alignItems="center" // center content horizontally
      backgroundColor="background"
      padding="m"
    >
      <Text variant="header" marginBottom="l"> HoopMap </Text>

      <Box
        width="100%"
        height="60%"
        borderRadius="m"
        overflow="hidden"
        marginBottom="m"
        style={{ opacity: location ? 1 : 0.6 }}
      >
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_REGION}
          showsUserLocation
          showsMyLocationButton
          ref={mapRef}
          style={{ flex: 1 }}
        />
      </Box>

      {!location && (
        <Text variant="body" marginBottom="m">
          Loading location...
        </Text>
      )}

      <Box marginTop="m">
        <Button title="Refresh Location" onPress={refreshLocation} />
      </Box>
    </Box>
  );
}
