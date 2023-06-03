import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Currency from "react-currency-formatter";
import { useNavigation } from "@react-navigation/native";

import { selectBasketItems, selectBasketTotal } from "features/basketSlice";

// ** redux method
import { useSelector } from "react-redux";

export default function BasketIcon() {
    // ** navigation method
    const navigation = useNavigation<any>();

    // ** basketSlice helper
    const item = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity
                onPress={() => navigation.navigate("Basket")}
                className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1"
            >
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
                    {item.length}
                </Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">
                    View Basket
                </Text>
                <Text className="text-lg text-white font-extrabold">
                    <Currency quantity={basketTotal} currency="PHP" />
                </Text>
            </TouchableOpacity>
        </View>
    );
}
