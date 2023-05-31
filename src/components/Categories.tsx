import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import CategoryCard from "components/CategoryCard";
import sanityClient, { urlFor } from "../../delivery-food-app/sanity";

export default function Categories() {
  // ** state
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Category Card */}
      {categories?.map((item) => (
        <CategoryCard
          key={item._id}
          imgUrl={urlFor(item.image).width(200).url()}
          title={item.name}
        />
      ))}
    </ScrollView>
  );
}
