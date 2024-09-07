import { Text, StyleSheet } from "react-native";
import Post from "../components/Post";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Post title="Lebron James" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 500,
    backgroundColor: "#222525",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "#010001",
    fontSize: 34,
    marginBottom: 8,
  },
});

export default Home;