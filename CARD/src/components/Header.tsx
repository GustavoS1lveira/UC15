import { View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>@gustavoo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  text: {
    color: "#200000",
    fontSize: 22,
    marginLeft: 8,
    paddingRight: 300,
  },
});

export default Header;