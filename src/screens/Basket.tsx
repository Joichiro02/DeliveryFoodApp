import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import Currency from "react-currency-formatter";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/solid";

import { removeFromBasket } from "features/basketSlice";
import { selectBasketItems } from "features/basketSlice";
import { selectBasketTotal } from "features/basketSlice";
import { selectRestaurant } from "features/restaurantSlice";
import { urlFor } from "../../delivery-food-app/sanity";

export default function Basket() {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const basketTotal = useSelector(selectBasketTotal);
    const items = useSelector(selectBasketItems);
    const restaurant = useSelector(selectRestaurant);

    // ** state
    const [groupItemInBasket, setGroupItemInBasket] = useState([]);

    useEffect(() => {
        const groupItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupItemInBasket(groupItems);
    }, [items]);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">
                            Basket
                        </Text>
                        <Text className="text-center text-gray-400">
                            {restaurant.title}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-3 right-5"
                    >
                        <XCircleIcon color="#00BBCC" size={50} />
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image
                        source={{ uri: "https://links.papareact.com/wru" }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupItemInBasket).map(([key, items]) => (
                        <View
                            className="flex-row items-center space-x-3 bg-white py-3 px-5"
                            key={key}
                        >
                            <Text className="text-[#00CCBB]">
                                {items.length} x
                            </Text>
                            <Image
                                source={{
                                    uri: urlFor(items[0]?.image).url(),
                                }}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>

                            <Text>
                                <Currency
                                    quantity={items[0]?.price}
                                    currency="PHP"
                                />
                            </Text>

                            <TouchableOpacity
                                onPress={() =>
                                    dispatch(removeFromBasket({ id: key }))
                                }
                            >
                                <Text className="text-[#00CCBB] text-xs">
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={basketTotal} currency="PHP" />
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={40} currency="PHP" />
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text>Order Total</Text>
                        <Text className="font-extrabold">
                            <Currency
                                quantity={basketTotal + 40}
                                currency="PHP"
                            />
                        </Text>
                    </View>

                    <TouchableOpacity
                        className="rounded-lg bg-[#00CCBB] p-4"
                        onPress={() => navigation.navigate("PreparingOrder")}
                    >
                        <Text className="text-center text-white text-lg font-bold">
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
