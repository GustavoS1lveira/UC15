import { Text, StyleSheet, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import EuDesc from "../components/SobreMim";
import Desc from "../components/Legenda";

const Home = () => {
  // Lógica
  //npx expo install react-native-safe-area-context
  return (
    <SafeAreaView style={styles.container}>
      <EuDesc />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Desc />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: "#ffffff",
    fontSize: 34,
    marginBottom: 8,
  },
});

export default Home;