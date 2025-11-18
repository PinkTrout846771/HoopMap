import { ThemeProvider } from "@shopify/restyle";
import { Stack } from 'expo-router';
import React from 'react';
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
