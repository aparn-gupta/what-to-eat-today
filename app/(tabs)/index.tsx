import { Text, View } from "react-native";
import "../globals.css";
import {Link} from "expo-router";

export default function Index() {

  const links = [
      "/about", "/explore", "/products"
  ]



  return (
    <View className="p-5 flex justify-center items-center h-full"
    >
      <Text className="text-pink-900 font-semibold text-4xl">HHEHEHEH</Text>
      {
        links.map((item, i) => (
            <Text key={i} className="py-3 text-fuchsia-800 font-bold"
            >
              <Link href={`/documents/${i}`}> Link {i + 1}</Link>
            </Text>

        ))
      }
    </View>
  );
}


