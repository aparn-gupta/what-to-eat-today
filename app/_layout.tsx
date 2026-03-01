import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="home/(tabs)" options={{ headerShown: false }}>

      </Stack.Screen>

      <Stack.Screen name="documents/[id]" options={{ headerShown: false }}>

      </Stack.Screen>

      <Stack.Screen name="(auth)" options={{ headerShown: false }}>

</Stack.Screen>
    </Stack>
  );
}
