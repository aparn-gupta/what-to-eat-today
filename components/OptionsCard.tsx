import React, { JSX } from "react";
import { Text, View } from "react-native";




export default function OptionsCard ({optionName}: {optionName: string}): JSX.Element {




    return (

        <>



                <View  className={""} style={{
                    backgroundColor: "white",
                    width: 144,
                    height: 144,
                    borderColor: "",
                    borderRadius: 8,
                    elevation: 5,
                    shadowColor: "",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    padding: 10,
                    pointerEvents: "auto"
                }}>


                    <Text className={''} style={{color: "slategray", fontSize: 9, textAlign: "center"}}> {optionName} </Text>



                </View>

















        </>

            )
            }



