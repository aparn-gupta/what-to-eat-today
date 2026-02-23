import DishCard from "@/components/DishCard";
import OptionsCard from "@/components/OptionsCard";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Animated,
  Button,
  FlatList,
  Modal,
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

export const serverAddress = "http://192.168.1.6:8000";

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
        setOptionsSet(res?.data);
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
      <View className={`${showResults ? 'hidden' : 'block'}`}>
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
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>



      <ScrollView className={`${showResults ? 'block' : 'hidden'} ` }>

        <View className="w-[95%] mx-auto lg:w-1/4 mt-8">

        <FlatList 

data={matchingDishes}
// renderItem={({item} )=> <View > {item.name} -- {item.prep_time} </View>}
renderItem={({item} )=> <DishCard  dish={item} />}

keyExtractor={item => String(item.id)}

/>
        
        </View>

     
        
      </ScrollView>

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
                <Text className="text-2xl">
                  Choose 
                  {options.find((item) => item.value === requestedOption)?.name}
                </Text>
                <ScrollView className={"flex-1 "}>
                  {/*{   [1, 2, 3, 4, 5, 6].map((item, index) => <View>{item}</View> )  }*/}

                  {optionsSet?.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        width: 400,
                        shadowOpacity: 0.8,
                        borderColor: "black",
                        padding: 16,
                        shadowColor: "#e6e6e6",
                        borderRadius: "50%",
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
                        {option && option}
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
