import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { LocationProvider } from '@/src/context/LocationContext';

export default function TabLayout() {
  return (
    <LocationProvider>
      <Tabs screenOptions={{ tabBarActiveTintColor: 'red' }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="courts"
          options={{
            title: 'Courts',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="basketball-sharp" color={color} />,
          }}
        />
      </Tabs>
    </LocationProvider>
  );
}
