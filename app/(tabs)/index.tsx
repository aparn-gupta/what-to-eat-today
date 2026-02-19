import {Animated, Text, View, Image, FlatList, StyleSheet , TouchableOpacity, Pressable, Modal, Alert} from "react-native";
import "../globals.css";
import {Link} from "expo-router";
import ScrollView = Animated.ScrollView;
import SearchBar from "@/components/SearchBar";
import {useRouter} from "expo-router";
import React, {useState, useEffect} from "react";
import axios from "axios";
import OptionsCard from "@/components/OptionsCard";
import CommonModal from "@/components/Modal";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// import React, {useState} from 'react';
// import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


export const serverAddress = " http://192.168.1.2:8000"






export default function Index() {


  const router = useRouter()
  const links = [
      "/about", "/explore", "/products"
  ]

  const [dishData, setDishData] = useState<any[]>([])

  const options = [
    {
      name: "Name",

    },
    {
      name: "Taste",

    },
    {
      name: "Region",

    },
    {
      name: "Ingredients",

    },
    {
      name: "Calories",

    },
    {
      name: "Prep Time",

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




  // @ts-ignore
  // @ts-ignore
  return (
    <ScrollView className="p-5 flex justify-center items-center h-full"
    >
      {/*<Text className="text-pink-900 font-semibold text-4xl">HHEHEHEH</Text>*/}
      {/*{*/}
      {/*  links.map((item, i) => (*/}
      {/*      <Text key={i} className="py-3 text-fuchsia-800 font-bold"*/}
      {/*      >*/}
      {/*        <Link href={`/documents/${i}`}> Link {i + 1}</Link>*/}
      {/*      </Text>*/}

      {/*  ))*/}


      {/*}*/}


      <CommonModal modalVisible={modalVisible} setModalVisible={setModalVisible} />













      <ScrollView >

        {/*<Image source={'https://img.freepik.com/free-vector/healthy-vegetable-salad-plate_1308-169927.jpg?semt=ais_user_personalization&w=740&q=80'} className={'w-12 h-12'} />*/}

        <SearchBar onPress={() => {router.push("/search")}}  />


      </ScrollView>





      <View className={"grid grid-cols-2 gap-3 w-100 h-100 "}>

        {
          options.map((option, index) => (

              <TouchableOpacity key={index}  style={{pointerEvents: "auto"}} onPress={() => {
                console.log("pressed")
                setModalVisible(true)
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

          renderItem={({item}) =>  ( <View><Text>{item?.name}</Text> </View>)}
      >

      </FlatList>



      <SafeAreaProvider>
        <SafeAreaView style={styles.centeredView}>
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible((prev: boolean) => !prev);
              }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                {/*<Pressable*/}
                {/*    style={[styles.button, styles.buttonClose]}*/}
                {/*    onPress={() => setModalVisible(!modalVisible)}>*/}
                {/*    <Text style={styles.textStyle}>Hide Modal</Text>*/}
                {/*</Pressable>*/}
              </View>
            </View>
          </Modal>
          {/*<Pressable*/}
          {/*    style={[styles.button, styles.buttonOpen]}*/}
          {/*    onPress={() => setModalVisible(true)}>*/}
          {/*    <Text style={styles.textStyle}>Show Modal</Text>*/}
          {/*</Pressable>*/}
        </SafeAreaView>
      </SafeAreaProvider>


    </ScrollView>






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





