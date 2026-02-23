import { JSX } from "react";
import { Text, View } from "react-native";

interface Dishes {
  id: number | string;
  name: string;
  taste: string;
  region: string;
  main_ingredients: string[];
  optional_ingredients: string[];
  recipe: string;
  calories: number | string;
  prep_time: number | string;
}

interface DishCardProps {
  dish: Dishes;
}

const DishCard = ({ dish }: DishCardProps): JSX.Element => {
  return (
    <View className="mb-8">
      <Text className="text-2xl"> {dish.name} </Text>
      <View
        className="flex flex-row"
        style={{ marginTop: 24, marginBottom: 10 }}
      >
        
        <Text style={{ fontWeight: "800" }}> Taste: </Text>
        <Text> {dish.taste}</Text>
      </View>
      <View
        className="flex flex-row"
        style={{ marginTop: 24, marginBottom: 10 }}
      >
        <Text className="" style={{ fontWeight: "800" }}>
          
          Origin:
        </Text>
        <Text> {dish.region} </Text>
      </View>
      <View style={{ marginTop: 24, marginBottom: 10 }}>
        <Text style={{ fontWeight: 800 }}> Main Ingredients:</Text>
      </View>
      <View className=" flex flex-wrap gap-4">
        
        {dish.main_ingredients.map((item, i) => (
          <Text key={i} className="p-3 rounded-md  ">
            {item}
          </Text>
        ))}
      </View>

      <Text style={{ fontWeight: "800", marginTop: 24, marginBottom: 10 }}>
        
        Optional Ingredients:
      </Text>
      <View>
        
        {dish.optional_ingredients.map((item, i) => (
          <Text key={i} className="p-3 rounded-md  shadow-slate-500">
            {item}
          </Text>
        ))}
      </View>

      <View
        className="flex flex-row"
        style={{ marginTop: 24, marginBottom: 10 }}
      >
        <Text className="" style={{ fontWeight: "800" }}>
          
          Time to Prepare:
        </Text>
        <Text> {dish.prep_time} </Text>
      </View>

      {/* <View className="flex flex-row" style={{marginTop: 24, marginBottom: 10}}>  */}
      <View
        className="flex flex-row"
        style={{ marginTop: 24, marginBottom: 10 }}
      >
        <Text style={{ fontWeight: 800 }}> Calories:</Text>

        <Text> {dish.calories} </Text>
      </View>

      {/* </View> */}

      <Text
        className=""
        style={{ fontWeight: "800", marginTop: 24, marginBottom: 10 }}
      >
        Short Recipie:
      </Text>

      <Text> {dish.recipe} </Text>
    </View>
  );
};

export default DishCard;
