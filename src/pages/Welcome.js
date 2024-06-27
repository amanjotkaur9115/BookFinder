import { ImageBackground, StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import React from "react";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/welcome.jpg");

const Welcome = () => {
  return (
    <ImageBackground
      imageStyle={{ opacity: 0.7 }}
      source={WelcomeImage}
      style={[containerStyle.container, {}]}>
      <Text
        style={{
          fontSize: 100,
          fontWeight: "bold",
          color: "black",
          fontFamily: "Inter-Black",
          backgroundColor: "blue",
          paddingHorizontal: 10,
        }}>
        BOOK
      </Text>
      <Text
        style={{
          fontSize: 45,
          fontWeight: "bold",
          color: "white",
          fontFamily: "Inter-Black",
          borderColor: "blue",
          borderWidth: 2,
          padding: 12,
        }}>
        FINDER APP
      </Text>

      <View style={{ marginTop: 200 }}>
        <CustomButton title={"Get Started"}></CustomButton>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({});