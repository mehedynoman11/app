// "use client";

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import { ChevronDownIcon } from "react-native-heroicons/solid";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAdjust,
  faArrowAltCircleDown,
  faArrowDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
// import { createClient } from "@sanity/client";
// import category from "../sanity/schemaTypes/category";

export default function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"] {
          ...,
          restaurants[]-> {
            ...,
            dishes[]->
          }
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  // console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-6">
      {/* Header  */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              style={{ color: "green" }}
              size={20}
            />
          </Text>
        </View>
        <FontAwesomeIcon icon={faUser} style={{ color: "blue" }} size={34} />
      </View>

      {/* search  */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-4">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "black" }}
            size={24}
          />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <FontAwesomeIcon icon={faAdjust} style={{ color: "gray" }} size={20} />
      </View>

      {/* body  */}
      <ScrollView>
        {/* category  */}
        <Categories />

        {/* feature rows  */}

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}

        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        {/* tasty discounts  */}
        <FeaturedRow
          id="1234"
          title="Tasty Discount"
          description="Everyone's benn enjoying these juicy discounts!"
        />
        {/* offers near you  */}
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
