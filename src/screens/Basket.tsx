import React from "react";
import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { selectRestaurant } from "features/restaurantSlice";
import { selectBasketItems } from "features/basketSlice";

export default function Basket() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);

    return (
        <SafeAreaView>
            <View>
                <Text>Basket</Text>
            </View>
        </SafeAreaView>
    );
}
