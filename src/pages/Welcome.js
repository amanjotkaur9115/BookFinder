import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import Loader from "../components/Loaders";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/Welcome.jpg");

const Welcome = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <ImageBackground
        source={WelcomeImage}
        style={[containerStyle.container, {}]}>
        <View
          style={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "black",
              backgroundColor: "yellow",
              paddingHorizontal: 10,
            }}>
            BOOK
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#fff",
              borderColor: "yellow",
              borderWidth: 2,
              padding: 12,
              width: 233,
            }}>
            FINDER APP
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <CustomButton
            navigation={navigation}
            title={"Get Started"}></CustomButton>
        </View>
      </ImageBackground>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
