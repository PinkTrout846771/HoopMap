import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import * as Location from "expo-location";

// Define the shape of the data your context provides
interface LocationData {
  latitude: number;
  longitude: number;
}

interface LocationContextType {
  location: LocationData | null;
  errorMsg: string | null;
  refreshLocation: () => Promise<void>;
}

// Create the context with a default null value
const LocationContext = createContext<LocationContextType | null>(null);

// Provider component that wraps your app (in _layout.tsx)
export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Request permission + fetch user location
  const fetchLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const current = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLocation({
        latitude: current.coords.latitude,
        longitude: current.coords.longitude,
      });
    } catch (error) {
      console.error("Error fetching location:", error);
      setErrorMsg("Failed to fetch location");
    }
  };

  // Fetch once on mount
  useEffect(() => {
    fetchLocation();
  }, []);

  // Expose the ability to refresh manually (e.g., pull-to-refresh)
  const refreshLocation = async () => {
    await fetchLocation();
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        errorMsg,
        refreshLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

// Hook to easily access the context anywhere
export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
