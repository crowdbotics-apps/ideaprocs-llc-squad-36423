import { Text } from "react-native";
import { TextInput } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: "#ffffff",
    padding: 10,
    position: "relative",
    height: "100%"
  }}>
      <ImageBackground source={{
      uri: "data:image/png;base64,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"
    }} resizeMode="cover" style={{
      left: 44,
      top: 5,
      position: "absolute",
      width: 100,
      height: 75
    }}></ImageBackground><TextInput style={{
      left: 14,
      top: 135,
      position: "absolute",
      backgroundColor: "#fafafa",
      borderColor: "#333333",
      borderWidth: 1,
      padding: 4,
      borderRadius: 4,
      width: 168,
      height: 30,
      color: "#999999"
    }} placeholder="Email Address" defaultValue="email@domain.com"></TextInput>
    
    <Text style={{
      position: "absolute",
      left: 14,
      top: 177,
      height: 31,
      width: 168,
      backgroundColor: "#27B1E0",
      borderRadius: 4,
      lineHeight: 30,
      fontSize: 12,
      textAlign: "center",
      color: "#f0f0f0",
      letterSpacing: 2,
      fontWeight: "700",
      fontFamily: "Roboto"
    }}>Reset Password</Text><Text style={{
      left: 17,
      top: 103,
      position: "absolute",
      width: 159,
      height: 19,
      lineHeight: 14,
      fontSize: 15,
      borderRadius: 0
    }}>Password Recovery</Text></View>;
};

export default Untitled1;