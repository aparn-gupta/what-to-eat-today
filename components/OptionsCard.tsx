import React, { JSX } from "react";
import { Text, View } from "react-native";

// @ts-ignore
export default function OptionsCard({ optionItem, selected }): JSX.Element {
  return (
    <>
      <View
        className={""}
        style={{
          backgroundColor: "white",
          width: 144,
          height: 144,
          borderColor: "",
          borderRadius: 8,
          elevation: 5,
          shadowColor: "",
          shadowOpacity: 0.3,
          shadowRadius: 4,
          padding: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
      <View style={{backgroundColor: ""}}>
      <Text
          className={""}
          style={{ color: "slategray", fontSize: 12, textAlign: "center" }}
        >
          {" "}
          {optionItem.name}{" "}
        </Text>

        <Text className=" " style={{color: "#D28E00", marginTop: 5, textTransform: "capitalize", fontWeight: 500, textAlign: "center"}} > {selected[optionItem.value]}</Text>
      </View>

    
      </View>
    </>
  );
}
