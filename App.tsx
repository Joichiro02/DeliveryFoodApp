import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// !! use to fix the error "URLSearchParams.set is not implemented"
// !! this error is from the photo url of sanity
import "react-native-url-polyfill/auto";
import { Provider } from "react-redux";

import Basket from "screens/Basket";
import Home from "screens/Home";
import PreparingOrder from "screens/PreparingOrder";
import Restaurant from "screens/Restaurant";
import { store } from "./store";
import Delivery from "screens/Delivery";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: "slide_from_right",
            }}
          >
            {/* Screen */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Restaurant" component={Restaurant} />
            <Stack.Screen
              name="Basket"
              component={Basket}
              options={{
                headerShown: false,
                presentation: "modal",
                animation: "slide_from_bottom",
              }}
            />
            <Stack.Screen
              name="PreparingOrder"
              component={PreparingOrder}
              options={{
                presentation: "fullScreenModal",
                headerShown: false,
                animation: "slide_from_bottom",
              }}
            />
            <Stack.Screen
              name="Delivery"
              component={Delivery}
              options={{
                presentation: "fullScreenModal",
                headerShown: false,
                animation: "slide_from_bottom",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
