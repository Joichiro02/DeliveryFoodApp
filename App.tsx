import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// !! use to fix the error "URLSearchParams.set is not implemented"
// !! this error is from the photo url of sanity
import "react-native-url-polyfill/auto";
import { Provider } from "react-redux";

import Basket from "screens/Basket";
import Home from "screens/Home";
import Restaurant from "screens/Restaurant";
import { store } from "./store";
import PreparingOrder from "screens/PreparingOrder";

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
                        <Stack.Screen
                            name="Restaurant"
                            component={Restaurant}
                        />
                        <Stack.Screen
                            name="Basket"
                            component={Basket}
                            options={{
                                headerShown: false,
                                presentation: "modal",
                            }}
                        />
                        <Stack.Screen
                            name="PreparingOrder"
                            component={PreparingOrder}
                            options={{
                                presentation: "fullScreenModal",
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </SafeAreaProvider>
    );
}
