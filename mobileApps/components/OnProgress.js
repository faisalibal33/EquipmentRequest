import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";

const OnProgress = ({ item }) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow" key={item._id}>
      <Image
        source={{
          uri: item.photos,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{item.equipment}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{item.requestBy} </Text>~{" "}
            {item._id}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">{item.remark}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OnProgress;
