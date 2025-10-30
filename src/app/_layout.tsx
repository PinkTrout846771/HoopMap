import { Stack } from 'expo-router';
import { ThemeProvider } from "@shopify/restyle";
import theme from '../themes/default';

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
