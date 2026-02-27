import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { Button, Dimensions, TextInput, View } from "react-native";
import { serverAddress } from "../(tabs)";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const handleSubmit = async () => {
    try {
      const url = `${serverAddress}/api/token/`;

      const response = await axios.post(
        url,
        JSON.stringify({
          username,
          password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);


      await SecureStore.setItemAsync("access-token", response.data.access);
      await SecureStore.setItemAsync("refresh-token", response.data.refresh);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View
      style={{
        width: screenWidth,
        height: screenHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View className="flex flex-column gap-4 border p-16 rounded-xl">
        <TextInput
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
          style={{
            borderWidth: 2,
            width: 300,
            height: 45,
            borderRadius: 10,
            padding: 10,
          }}
        />

        <TextInput
          onChangeText={setPassword}
          placeholder="Password"
          value={password}
          style={{
            borderWidth: 2,

            width: 300,
            height: 45,
            borderRadius: 10,
            padding: 10,
          }}
        />
      </View>

      <View className="mt-5 ">
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    </View>
  );
}
