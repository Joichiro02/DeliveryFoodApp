import { View, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

// ** libraries
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "components/RestaurantCard";
import sanityClient from "../../delivery-food-app/sanity";

interface FeaturedRowTypes {
  id: string;
  title: string;
  description: string;
  featuredCategory: string[];
}

export default function FeaturedRow({
  id,
  title,
  description,
  featuredCategory,
}: FeaturedRowTypes) {
  // // ** state
  // const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `
  // *[_type == "featured" && _id == $id] {
  //   ...,
  //   restaurants[] -> {
  //     ...,
  //     dishes[] ->,
  //     type -> {
  //       name
  //     }
  //   }
  // }[0]
  // `,
  //       { id }
  //     )
  //     .then((data) => setRestaurants(data?.restaurants));
  // }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg capitalize" numberOfLines={1}>
          {title}
        </Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4" numberOfLines={1}>
        {description}
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        {featuredCategory?.map((item: any) => (
          <RestaurantCard
            key={item._id}
            id={item._id}
            imgUrl={item.image}
            title={item.name}
            rating={item.rating}
            genre="Japanese"
            address={item.address}
            short_description={item.short_description}
            dishes={item.dishes}
            long={item.long}
            lat={item.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}
