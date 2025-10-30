import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { LocationProvider } from "@/src/context/LocationContext";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../themes/default";

export default function TabLayout() {
  const theme = useTheme<Theme>();

  return (
    <LocationProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarStyle: { backgroundColor: theme.colors.background },
          tabBarLabelStyle: { color: theme.colors.text, fontSize: theme.textVariants.tabBar.fontSize, fontWeight: "bold"},
          headerShown: false,
          
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="courts"
          options={{
            title: "Courts",
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name="basketball-sharp" color={color} />
            ),
          }}
        />
      </Tabs>
    </LocationProvider>
  );
}
