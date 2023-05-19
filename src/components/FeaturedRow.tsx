import { View, ScrollView, Text } from "react-native";
import React from "react";

// ** libraries
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "components/RestaurantCard";

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
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={10}
          lat={10}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={10}
          lat={10}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={10}
          lat={10}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={10}
          lat={10}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={10}
          lat={10}
        />
      </ScrollView>
    </View>
  );
}
