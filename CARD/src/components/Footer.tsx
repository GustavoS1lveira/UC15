import React from "react";
import { View, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Feather name="heart" size={50} color="black" />
      <Feather name="cloud" size={50} color="black" />
      <Feather name="more-horizontal" size={50} color="black" />
      <Feather name="flag" size={50} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    borderColor: "#f1f1f1",
    backgroundColor: "#F08080",
    width: "100%",
    alignSelf: "center",
  },
});

export default Footer;