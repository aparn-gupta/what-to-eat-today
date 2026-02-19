import {TextInput, Touchable, TouchableOpacity, View, Image, Pressable, Text} from "react-native";
import {Search} from "lucide-react-native";
import React, {JSX} from "react";
import CommonModal from "@/components/Modal";
import {useRouter} from "expo-router";
import {useState} from "react";



export default function OptionsCard ({optionName}: {optionName: string}): JSX.Element {




    return (

        <>



                <Pressable  className={""} style={{
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

                    {/*<Image source="" />*/}

                    <Text className={''} style={{color: "slategray", fontSize: 9, textAlign: "center"}}> {optionName} </Text>



                </Pressable>

















        </>

            )
            }



