// modules
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

// jsx
const Search = ({ submitSearchText }) => {
  return (
    // Une "View" est en quelque sorte une "div" en React
    <View style={styles.view}>
      <TextInput
        style={styles.textinput}
        type="search"
        onChange={(e) => {
          submitSearchText(e.target.value);
        }}
      />
    </View>
  );
};

// css
const styles = StyleSheet.create({
  loading_view: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  textinput: {
    width: "90%",
    padding: 15,
    borderRadius: 50,
    borderColor: "#b2bec3",
    borderWidth: 1,
  },
  buttonSearch: {
    color: "#2d3436",
  },
});

export default Search;
