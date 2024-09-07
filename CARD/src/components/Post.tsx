import { View, Text, StyleSheet, Image } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

interface PostProps {
  title: string;
}

const Post = ({ title }: PostProps) => {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#DAC8B3",
        width: "90%",
        paddingVertical: 8,
      }}
    >/
      <Header />
      <Image
        style={{ height: 800, resizeMode: "contain" }}
        source={require("../../jordan.png")}
      />
      <Text style={styles.title}>{title}</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#000000",
  },
});

export default Post;