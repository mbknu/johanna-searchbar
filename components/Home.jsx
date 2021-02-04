import React, { useState, useEffect, useRef } from "react";
import { View, ActivityIndicator, StyleSheet, Button } from "react-native";

import Axios from "axios";

import Search from "./Search";
import getApiurl from "../API/getApiUrl";
import MoviesList from "./MoviesList";

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevSearch = usePrevious(searchText);

  const isLoading = () => {
    if (loading) {
      return (
        <View style={styles.loading_view}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  };

  useEffect(() => {
    const apiUrl = getApiurl(searchText, currentPage);

    setLoading(true);

    Axios.get(apiUrl)
      .then((response) => response.data)
      .then((data) => {
        setMoviesList(data);
        if (searchText !== prevSearch && currentPage > 1) {
          setCurrentPage(1);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchText, currentPage]);

  //Pas très joli, à optimiser
  const handleNextClick = () => {
    if (searchText.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousClick = () => {
    if (currentPage <= 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View>
      <Search submitSearchText={setSearchText} />
      {isLoading()}
      <Button style={styles.button} title="Next" onPress={handleNextClick} />
      {searchText && currentPage > 1 && (
        <Button
          style={styles.button}
          title="Back"
          onPress={handlePreviousClick}
        />
      )}
      <MoviesList list={moviesList} />
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
});

export default Home;
