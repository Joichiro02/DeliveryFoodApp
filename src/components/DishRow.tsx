import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// ** currency lib
import Currency from "react-currency-formatter";

// ** icons lib
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

// ** redux lib
import { useDispatch, useSelector } from "react-redux";

// ** sanity lib
import { urlFor } from "../../delivery-food-app/sanity";

// ** method for adding item
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "features/basketSlice";

export default function DishRow({ id, name, short_description, price, image }) {
  // ** state
  const [isPressed, setIsPressed] = useState(false);
  // ** redux methods
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  // ** add item to the basket reducer
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, short_description, price, image }));
  };

  // ** remove item to the basket reducer
  const removeItemToBasket = () => {
    if (!(items.length > 0)) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400 text-justify" numberOfLines={3}>
              {short_description}
            </Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="PHP" />
            </Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemToBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

// 2:26:01
