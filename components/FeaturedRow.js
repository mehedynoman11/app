import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ title, description, id }) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Reastaureant card  */}
        <RestaurantCard
          id={123}
          imgUrl="https://www.tyentusa.com/blog/wp-content/uploads/2016/03/Fotolia_97505360_Subscription_Monthly_M.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a good restaurant"
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://www.tyentusa.com/blog/wp-content/uploads/2016/03/Fotolia_97505360_Subscription_Monthly_M.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a good restaurant"
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://www.tyentusa.com/blog/wp-content/uploads/2016/03/Fotolia_97505360_Subscription_Monthly_M.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a good restaurant"
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://www.tyentusa.com/blog/wp-content/uploads/2016/03/Fotolia_97505360_Subscription_Monthly_M.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a good restaurant"
          dishes={[]}
          long={20}
          lat={20}
        />
      </ScrollView>
    </View>
  );
}
