import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://academy.accesstrade.global/Assets/img/1600765202_65415.jpg"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://academy.accesstrade.global/Assets/img/1600765202_65415.jpg"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://academy.accesstrade.global/Assets/img/1600765202_65415.jpg"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://academy.accesstrade.global/Assets/img/1600765202_65415.jpg"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://academy.accesstrade.global/Assets/img/1600765202_65415.jpg"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://academy.accesstrade.global/Assets/img/1600765202_65415.jpg"
        title="Testing 3"
      />
    </ScrollView>
  );
}
