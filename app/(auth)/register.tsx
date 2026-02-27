import axios from "axios";
import { useState } from "react";
import {
    Button,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { serverAddress } from "../(tabs)";

export default function Register() {
  const [userFormData, setUserFormData] = useState({
    email: "",

    first_name: "",
    last_name: "",
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const url = `${serverAddress}/dishes/users/`;

      const response = await axios.post(url, JSON.stringify(userFormData), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(userFormData);

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl">Sign up to Food App </Text>
      <View>
        <TextInput
          value={userFormData.email}
          onChangeText={(text) =>
            setUserFormData({ ...userFormData, email: text })
          }
          placeholder="Email"
          style={styles.inputStyle}
        />

        <TextInput
          value={userFormData.first_name}
          onChangeText={(text) =>
            setUserFormData({ ...userFormData, first_name: text })
          }
          placeholder="First Name"
          style={styles.inputStyle}
        />

        <TextInput
          value={userFormData.last_name}
          onChangeText={(text) =>
            setUserFormData({ ...userFormData, last_name: text })
          }
          placeholder="Last Name"
          style={styles.inputStyle}
        />

        <TextInput
          value={userFormData.username}
          onChangeText={(text) =>
            setUserFormData({ ...userFormData, username: text })
          }
          placeholder="Username"
          style={styles.inputStyle}
        />

        <TextInput
          value={userFormData.password}
          textContentType="password"
          onChangeText={(text) =>
            setUserFormData({ ...userFormData, password: text })
          }
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
        />
      </View>

      <View className="mt-8">
      <Button
        title="Create Your Food App Account"
        color="#D28E00"
        onPress={handleSubmit}
      />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 2,

    width: 350,
    height: 45,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    

  },
});
