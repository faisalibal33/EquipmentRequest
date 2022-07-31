import { useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from "../redux/RequestSlice";
import AllRequest from "./allRequest";

const FeaturedHome = ({ title, description, featuredCategory }) => {
  const { request, loading, error } = useSelector((state) => ({
    ...state.request,
  }));
  const progressOpen = [...request]?.sort((a, b) =>
    b.createdAt > a.createdAt ? 1 : -1
  );

  return (
    <View className="bg-gray-100">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
      </View>
      {/* <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      > */}
      {loading && <Text>Loading</Text>}
      {!loading && error ? <Text>Error: {request.error}</Text> : null}
      {!loading && request ? (
        <FlatList
          data={progressOpen}
          initialNumToRender={8}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <AllRequest item={item} />}
          className="mt-2"
        />
      ) : null}
      {/* </ScrollView> */}
    </View>
  );
};

export default FeaturedHome;
