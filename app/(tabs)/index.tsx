import {Animated, Text, View, Image, FlatList} from "react-native";
import "../globals.css";
import {Link} from "expo-router";
import ScrollView = Animated.ScrollView;
import SearchBar from "@/components/SearchBar";
import {useRouter} from "expo-router";
import {useState, useEffect} from "react";
import axios from "axios";


export const serverAddress = " http://192.168.1.2:8000"




export default function Index() {


  const router = useRouter()
  const links = [
      "/about", "/explore", "/products"
  ]

  const [dishData, setDishData] = useState<any[]>([])





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



  // @ts-ignore
  // @ts-ignore
  return (
    <View className="p-5 flex justify-center items-center h-full"
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







      <ScrollView >

        <Image source={'https://img.freepik.com/free-vector/healthy-vegetable-salad-plate_1308-169927.jpg?semt=ais_user_personalization&w=740&q=80'} className={'w-12 h-12'} />

        <SearchBar onPress={() => {router.push("/search")}}  />


      </ScrollView>


      <FlatList
          data={dishData}
          renderItem={({item}) =>   <View><Text>{item?.name}</Text> </View>}
      >

      </FlatList>


    </View>
  );
}


