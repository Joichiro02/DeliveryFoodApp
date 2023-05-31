import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";

// ** libraries
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

// ** components
import Categories from "components/Categories";
import FeaturedRow from "components/FeaturedRow";
import sanityClient from "../../delivery-food-app/sanity";

// ** index function
export default function Home() {
  const navigation = useNavigation();
  // **
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    console.log("@@@@@@@@@");

    sanityClient
      .fetch(
        `
    *[_type == "featured"] {
      ...,
      restaurants[] -> {
        ...,
        dishes[] -> {
        }
      }
    }`
      )
      .then((data) => {
        console.log("@@@", data);

        setFeaturedCategory(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-3 items-center flex-1">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategory?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            featuredCategory={category.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// 1:16:39
