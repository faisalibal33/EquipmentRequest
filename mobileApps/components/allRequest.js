import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import { CalendarIcon, StarIcon } from "react-native-heroicons/solid";
import {
  CheckCircleIcon,
  LocationMarkerIcon,
  UserIcon,
} from "react-native-heroicons/outline";

const AllRequest = ({ item }) => {
  let number = item?._id;
  let wo = String(number).padStart(6, "0");
  return (
    <View className="bg-white m-2 shadow flex-row gap-2 mb-3" key={item._id}>
      <View className="pl-2 ">
        <Image
          source={{
            uri: item.photos,
          }}
          className="h-32 w-32 rounded-sm mb-1"
        />
        {item?.progress === "CLOSE" ? (
          <View className="flex-col w-32">
            <View className="flex-row items-center">
              <CheckCircleIcon color="green" size={15} />
              <Text className="text-xs text-green-500">{item?.closeDate}</Text>
            </View>
            <View className="flex-row items-center">
              <UserIcon color="green" size={15} />
              <Text className="text-xs text-green-500">{item?.closeBy}</Text>
            </View>
          </View>
        ) : null}
        {/* <View className="px-3 pb-4">
          <Text className="font-bold text-lg pt-2">{item.equipment}</Text>
          <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text className="text-xs text-gray-500">
              <Text className="text-green-500">{item.requestBy} </Text>~
              {item._id}
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
            <Text className="text-xs text-gray-500">{item.remark}</Text>
          </View>
        </View> */}
      </View>
      <View className="flex-row">
        <View className="flex-col gap-1 w-48">
          <Text className="font-bold text-lg text-blue-400">
            {item.equipment}
          </Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xs">Order Number</Text>
            <Text className="ml-1 text-xs bg-blue-400 text-white p-1 rounded-md">
              {wo}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
            }}
            className="bg-green-700 rounded-sm"
          >
            <Text className="text-xs text-white p-1 ">
              {item.requestBy} - {item?.idNumber} - {item?.unit}
            </Text>
          </View>
          <Text className="font-bold text-xs">{item?.remark}</Text>
          <View className="flex-row items-center">
            <CalendarIcon color="gray" size={15} opacity={0.4} />
            <Text className="text-xs"> {item?.requestDate}</Text>
          </View>
          {item?.progress === "OPEN" ? (
            <Text className="text-xs text-red-500">
              Work order waiting for excecution
            </Text>
          ) : item?.progress === "CLOSE" ? (
            <Text className="text-xs text-green-500">
              Work order has been finished
            </Text>
          ) : (
            <Text className="text-xs text-orange-400">
              Work order on progress execution
            </Text>
          )}
        </View>
        <View className="justify-between">
          <View className="font-bold">
            <Text className="font-bold">{item?.aircraftReg}</Text>
            {/* <button>100</button> */}
          </View>
          <View className="crButton">
            {item?.progress === "OPEN" ? (
              <TouchableOpacity className="bg-red-600 rounded-md items-center">
                <Text className="text-white p-1">OPEN</Text>
              </TouchableOpacity>
            ) : item?.progress === "CLOSE" ? (
              <TouchableOpacity className="bg-green-500 rounded-md items-center">
                <Text className="text-white p-1">CLOSE</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity className="bg-orange-400 rounded-md items-center">
                <Text className="text-white p-1">PROGRESS</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default AllRequest;

// const styles = StyleSheet.create({
//   container: {
//     width: max-con,
//   }
// })
