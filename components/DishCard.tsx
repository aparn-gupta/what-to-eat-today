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
    <View className="mb-8" style={{borderWidth: 1, borderRadius: 10, borderColor: "#c9c8c3", padding: 20, marginBottom: 16, 
    // backgroundColor: "white"
    }}>
      <Text className="text-2xl" style={{color: "#D28E00"}} > {dish.name.trim()} </Text>


      <View className="flex flex-row justify-between">
      <View
        className="flex flex-row"
        style={{ marginTop: 24, marginBottom: 10 }}
      >
        
        <Text style={{ fontWeight: "800" }}> Taste: </Text>
        <Text className="capitalize" style={{
    textTransform: "capitalize"
}}> {dish.taste}</Text>
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
      </View>
     
      <View style={{ marginTop: 24, marginBottom: 10 }}>
        <Text style={{ fontWeight: 800 }}> Main Ingredients:</Text>
      </View>
      <View className=" flex flex-row flex-wrap" style={{gap: 10}}>
        
        {dish.main_ingredients.map((item, i) => (
         <View style={{
          backgroundColor: "#EEDB83",
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 4,
          paddingBottom: 4,
          borderRadius: 10
         }}>  <Text key={i} className="p-3 rounded-md  ">
         {item}
       </Text></View>

        ))}
      </View>

      <Text style={{ fontWeight: "800", marginTop: 24, marginBottom: 10 }}>
        
        Optional Ingredients:
      </Text>
      <View className="flex flex-row flex-wrap " style={{gap: 10}}>
        
        {dish.optional_ingredients.map((item, i) => (
           <View style={{
            backgroundColor: "#EEDB83",
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 4,
            paddingBottom: 4,
            borderRadius: 10
           }}>  <Text key={i} className="p-3 rounded-md  ">
           {item}
         </Text></View>
        ))}
      </View>

  <View className="flex flex-row justify-between">
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
