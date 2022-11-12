import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default IndexScreen;
