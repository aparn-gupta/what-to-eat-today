import DishCard from "@/components/DishCard";
import OptionsCard from "@/components/OptionsCard";
import axios from "axios";
import { useRouter } from "expo-router";
import { X } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Animated,
  Button,
  FlatList,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../globals.css";
import ScrollView = Animated.ScrollView;

// import React, {useState} from 'react';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// export const serverAddress = " http://192.168.1.2:8000"

type Dishes = {
  id: number | string,
  name: string,
  taste: string,
  region: string,
  main_ingredients: string[],
  optional_ingredients: string[],
  recipe: string,
  calories: number | string,
  prep_time: number | string

}

export const serverAddress = "http://192.168.1.4:8000";

export default function Index() {
  const router = useRouter();
  const links = ["/about", "/explore", "/products"];

  const [dishData, setDishData] = useState<any[]>([]);

  const options = [
    {
      name: "Cooking Style",
      value: "cooking_method",
    },
    {
      name: "Taste",
      value: "taste",
    },
    {
      name: "Region",
      value: "region",
    },
    {
      name: "Ingredients",
      value: "ingredients",
    },
    {
      name: "Calories",
      value: "calories",
    },
    {
      name: "Prep Time",
      value: "prep_time",
    },
  ];

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const url = `${serverAddress}/dishes/list`;
        const res = await axios.get(url);
        console.log(res?.data);
        setDishData(res?.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDishes();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFields, setSelectedFields] = useState({
    taste: "",
    region: "",
    cookingMethod: "",
    ingredients: "",
    calories: "",
    prepTime: "",
  });
  const [optionsSet, setOptionsSet] = useState([]);

  const [requestedOption, setRequestedOption] = useState("");

  const [showResults, setShowResults] = useState(false);
  const [matchingDishes, setMatchingDishes] = useState<Dishes[]>([])

  // console.log(requestedOption)

  console.log(selectedFields);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const url = `${serverAddress}/dishes/options/?requested=${requestedOption}`;
        const res = await axios.get(url);
        console.log(res?.data);
        let nonEmptyOptions = res?.data.filter((item: any) => item && item)

        let categories = []

        if (requestedOption == "prep_time") {
          let min = nonEmptyOptions[0]
          let max = nonEmptyOptions[nonEmptyOptions.length - 1]


          for (let each of nonEmptyOptions) {
            if (Number(each) < Number(max)) {
              categories.push(`${each}-${Number(each) + 10}`)
            }
  
          }

          setOptionsSet(categories);

      



        } else   if (requestedOption == "calories") {
          let min = nonEmptyOptions[0]
          let max = nonEmptyOptions[nonEmptyOptions.length - 1]


          for (let each of nonEmptyOptions) {
            if (Number(each) < Number(max)) {
              categories.push(`${each}-${Number(each) + 20}`)
            }
  
          }

          setOptionsSet(categories);

      



        } 
        
        
        else {
          setOptionsSet(nonEmptyOptions);
        }



      
        
       
      } catch (err) {
        console.error(err);
      }
    };

    if (requestedOption) fetchOptions();
  }, [requestedOption]);

  const loadDishes = async () => {
    let queryStr = `taste=${selectedFields.taste}&region=${selectedFields.region}&calories=${selectedFields.calories}&prep_time=${selectedFields.prepTime}&cooking_method=${selectedFields.cookingMethod}`;

    // &ingredients=${selectedFields.ingredients}

    try {
      const url = `${serverAddress}/dishes/preferences?${queryStr}`;
      const res = await axios.get(url);
      console.log(url);
      console.log(res?.data);
      setMatchingDishes(res?.data);
    } catch (err) {
      console.error(err);
    }
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <>
      {/* <TouchableOpacity className="bg-red-400 h-20 w-20"   onPress={() => console.log("pressed")}> 
    <Text>Hello</Text>
    </TouchableOpacity> */}
    



 {showResults ?      <ScrollView >



<View className="w-[95%] mx-auto lg:w-1/4 mt-8">

<Text className={`mb-4  `} style={{color:"#c9c8c3"}}> Dishes matching your preferences:</Text>



<FlatList 

data={matchingDishes}
// renderItem={({item} )=> <View > {item.name} -- {item.prep_time} </View>}
renderItem={({item} )=> <DishCard  dish={item} />}

keyExtractor={item => String(item.id)}
ListEmptyComponent={<View> No Dishes Found Matching your preferences. Please try something else! </View>}

/>

</View>



</ScrollView> :   <View >
        <View
          className={
            "flex-row flex-wrap justify-between gap-3 w-[95%] mx-auto lg:w-1/4 mt-8"
          }
        >
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={{ pointerEvents: "auto" }}
              onPress={() => {
                console.log("pressed");
                setModalVisible(true);
                setRequestedOption(option.value);
              }}
            >
              <OptionsCard optionItem={option} selected={selectedFields} />
            </TouchableOpacity>
          ))}
        </View>

        {/*<FlatList*/}
        {/*    data={dishData}*/}
        {/*    keyExtractor={(item) => item.id}*/}

        {/*    renderItem={({item}) =>  ( <View key={item.id}>*/}
        {/*      <Text>{item?.name}</Text> */}
        {/*      </View>)}*/}
        {/*>*/}

        {/*</FlatList>*/}

        <View className={"mt-8 w-1/3 mx-auto"}>
          <Button
            onPress={() => {
              console.log("submitting");
              setShowResults(true);
              loadDishes();
            }}
            title="Show Dishes"
            color="#D28E00"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>}

      <SafeAreaProvider>
        <SafeAreaView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            presentationStyle="pageSheet"
          >
            <View className="flex-1 justify-center items-center ">
              <View className="w-[90%] mx-auto lg:w-1/2 rounded-lg bg-white p-5 border border-zinc-200 ">

              <View className="w-full flex-row  " style={{display: 'flex', justifyContent: 'space-between'}}>  <Text className="text-2xl mb-6">
                  Choose {" "}
                   {options.find((item) => item.value === requestedOption)?.name} 
                 <Text className="text-base" style={{color: "#c9c8c3"}}>  {requestedOption == "prep_time" ? "(In Minutes)" : ""}</Text>


                </Text>


               <Pressable onPress={() => setModalVisible(false)} > <X /></Pressable>
                </View>

              
                <ScrollView className={"flex-1"} contentContainerStyle={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 16

                }}>
                  {/*{   [1, 2, 3, 4, 5, 6].map((item, index) => <View>{item}</View> )  }*/}

                  {optionsSet?.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        shadowOpacity: 0.8,
                       elevation: 3,
                        padding: 12,
                        backgroundColor: "#c9c8c3",
                        borderColor: "#c9c8c3",
                        borderRadius: 10,
                        marginBottom: 10,
                      


                       
                      }}
                      onPress={() => {
                        setModalVisible(false);
                        setSelectedFields((prev) => ({
                          ...prev,
                          [requestedOption]: option,
                        }));
                      }}
                    >
                      <Text
                        style={
                          {
                            // backgroundColor: ' #f2f2f2',
                          }
                        }
                      >
                        {option} 
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//   },
// });
