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
          width: optionItem.value == "ingredients" ? 370 : 175,
          height: optionItem.value == "ingredients" ? 180 : 175,
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
      <View >
      <Text
          className={""}
          style={{ color: "slategray", fontSize: 12, textAlign: "center" }}
        >
          {" "}
          {optionItem.name}{" "}
        </Text>


        <View style={{backgroundColor: "",  display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: 5, padding: 10}}>

        {  optionItem.value == "ingredients" ?  selected[optionItem.value].map((item: any) => (
          <View style={{
            backgroundColor: "#EEDB83",
           
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 4,
            paddingBottom: 4,
            borderRadius: 10,
            
           }}> <Text> {item}</Text></View>
        ))   :   <Text style={{color: "#D28E00", marginTop: 5, textTransform: "capitalize", fontWeight: 500, textAlign: "center"}}> {selected[optionItem.value]} </Text>} 
        </View>

      </View>

    
      </View>
    </>
  );
}
