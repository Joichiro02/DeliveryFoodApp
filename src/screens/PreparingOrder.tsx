import React from "react";

import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PreparingOrder() {
    return (
        <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center">
            <Animatable.Image
                source={require("../assets/orderLoading.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-42 w-42"
            />

            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for Restaurant to accept your order!
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color="white" />
        </SafeAreaView>
    );
}
