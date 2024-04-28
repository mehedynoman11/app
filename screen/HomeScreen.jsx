import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
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

// import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-6">
      <Text className="text-red-400">
        {/* Header  */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View>
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              {/* <ChevronDownIcon size={20} color="#00ccvc" /> */}
              {/* < size={20} color="#00ccbb" />
               */}{" "}
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                style={{ color: "green" }}
                size={20}
              />
            </Text>
          </View>
          <FontAwesomeIcon icon={faUser} style={{ color: "blue" }} size={34} />
          {/* <Icons.UserIcon size={35} color="#00ccbb" /> */}
        </View>

        {/* search  */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
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

          <FontAwesomeIcon
            icon={faAdjust}
            style={{ color: "gray" }}
            size={20}
          />
        </View>
      </Text>
    </SafeAreaView>
  );
}
