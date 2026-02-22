import OptionsCard from "@/components/OptionsCard";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Animated, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import "../globals.css";
import ScrollView = Animated.ScrollView;

// import React, {useState} from 'react';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


// export const serverAddress = " http://192.168.1.2:8000"

export const serverAddress = "http://192.168.1.6:8000"







export default function Index() {


  const router = useRouter()
  const links = [
      "/about", "/explore", "/products"
  ]

  const [dishData, setDishData] = useState<any[]>([])

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
      name: "region",
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
  ]





  useEffect(() => {

    const fetchDishes = async () => {
      try {
        const url = `${serverAddress}/dishes/list`
        const res =  await axios.get(url)
        console.log(res?.data)
        setDishData(res?.data)



      } catch (err) {
        console.error(err);
      }
    }


    fetchDishes()



  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFields, setSelectedFields] = useState({
    taste: "",
    region: "",
    cookingMethod: "",
    ingredients: "",
    calories: 0,
    prepTime: 0


  })
  const [optionsSet, setOptionsSet] = useState([])

  const [requestedOption, setRequestedOption] = useState("")

  console.log(requestedOption)


  useEffect(() => {

    const fetchOptions = async () => {




      try {
        const url = `${serverAddress}/dishes/options/?requested=${requestedOption}`
        const res =  await axios.get(url)
        console.log(res?.data)
        setOptionsSet(res?.data)



      } catch (err) {
        console.error(err);
      }
    }


   if (requestedOption)  fetchOptions()



  }, [requestedOption]);


  




  // @ts-ignore
  // @ts-ignore
  return (
  <>

  {/* <TouchableOpacity className="bg-red-400 h-20 w-20"   onPress={() => console.log("pressed")}> 
    <Text>Hello</Text>
    </TouchableOpacity> */}
      <View className={"flex-row flex-wrap justify-between gap-3 w-[95%] mx-auto lg:w-1/4"}>
  
          {
            options.map((option, index) => (
  
                <TouchableOpacity key={index}  style={{pointerEvents: "auto"}} onPress={() => {
                  console.log("pressed")
                  setModalVisible(true)
                  setRequestedOption(option.value)
                }}
  
  
                >

  
                  <OptionsCard  optionName={option.name}   />

                 
  
                </TouchableOpacity>
  
  
  
  
  
  
                )
            )
          }
  
        </View>


        <FlatList
            data={dishData}
            keyExtractor={(item) => item.id}
  
            renderItem={({item}) =>  ( <View key={item.id}>
              <Text>{item?.name}</Text> 
              </View>)}
        >
  
        </FlatList>


        <SafeAreaProvider>
          <SafeAreaView >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                presentationStyle="pageSheet"
              >

             <View className="flex-1 justify-center items-center " >


              <View className="w-[90%] mx-auto lg:w-1/2 rounded-xl bg-white p-5  ">
              <ScrollView className={'flex-1'}>
                {/*{   [1, 2, 3, 4, 5, 6].map((item, index) => <View>{item}</View> )  }*/}

                {optionsSet?.map((option, index) => (<View key={index}>{option}</View>))}
                </ScrollView>
              </View>
         


             </View>
                  
          
            </Modal>
       
          </SafeAreaView>
        </SafeAreaProvider>



  </>






  );
}





const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});





