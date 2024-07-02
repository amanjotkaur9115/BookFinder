import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import Loader from "../components/Loaders";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/Welcome.jpg");

const Welcome = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading === false ? (
        <ImageBackground
         imageStyle={{ opacity: 0.7 }}
          source={WelcomeImage}
          style={[containerStyle.container, {width: "100%",height :"100%"}]}>
          <View
            style={{
              flex: 4,
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: "black",
                fontFamily: "Inter-Black",
                borderColor: "black",
                backgroundColor: "#9bd1b5",
                backgroundColor: "yellow",
                paddingHorizontal: 10,
              }}>
              BOOK
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
                borderColor: "black",
                borderWidth: 2,
                padding: 12,
                width: 233,
              }}>
              FINDER APP
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "center" }}>
            <CustomButton navigation= {navigation} hand title={"Get Started"}></CustomButton>
          </View>
        </ImageBackground>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
