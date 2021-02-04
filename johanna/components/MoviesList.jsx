import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MovieItem from "./MovieItem";

const MoviesList = ({ list }) => {

  return (
    <View style={styles.view}>
      <FlatList
        data={list.results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieItem movie={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});

export default MoviesList;
