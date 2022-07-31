import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from "../redux/RequestSlice";
import OnProgress from "./OnProgress";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  const { request, loading, error } = useSelector((state) => ({
    ...state.request,
  }));
  const progressOpen = [...request]
    ?.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))
    .filter(
      (item) =>
        item.progress.toLowerCase().includes("open") ||
        item.progress.toLowerCase().includes("progress")
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
          renderItem={OnProgress}
          initialNumToRender={7}
          keyExtractor={(item, index) => index}
          horizontal={true}
          className="mt-2"
        />
      ) : null}
      {/* </ScrollView> */}
    </View>
  );
};

export default FeaturedRow;
