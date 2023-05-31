import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// !! use to fix the error "URLSearchParams.set is not implemented"
import "react-native-url-polyfill/auto";

import Home from "screens/Home";
import Restaurant from "screens/Restaurant";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
          {/* Screen */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
