import { ScrollView, Text } from "react-native";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchEquipment } from "../redux/EquipmentSlice";
import { useEffect } from "react";

const Categories = () => {
  const { equipment, loading, error } = useSelector((state) => ({
    ...state.equipment,
  }));

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 18,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {loading && <Text>Loading</Text>}
      {!loading && error ? <Text>Error: {equipment.error}</Text> : null}
      {!loading && equipment
        ? equipment.map((item) => (
            <CategoryCard
              key={item._id}
              imgUrl={item.images}
              title={item.equipmentName}
            />
          ))
        : null}
      {/* <CategoryCard
        imgUrl="https://www.linkpicture.com/q/pbc.jpg"
        title="Pushback Car"
      />
      <CategoryCard
        imgUrl="https://www.linkpicture.com/q/pbc.jpg"
        title="Pushback Car"
      />
      <CategoryCard
        imgUrl="https://www.linkpicture.com/q/pbc.jpg"
        title="Pushback Car"
      />
      <CategoryCard
        imgUrl="https://www.linkpicture.com/q/pbc.jpg"
        title="Pushback Car"
      />
      <CategoryCard
        imgUrl="https://www.linkpicture.com/q/pbc.jpg"
        title="Pushback Car"
      />
      <CategoryCard
        imgUrl="https://www.linkpicture.com/q/pbc.jpg"
        title="Pushback Car"
      /> */}
    </ScrollView>
  );
};

export default Categories;
