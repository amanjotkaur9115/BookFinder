// SearchScreen.js

import {
  ActivityIndicator,
  Button,
  Card,
  Paragraph,
  Provider,
  Searchbar,
  Title,
} from "react-native-paper";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import axios from "axios";

const DetalisScreen = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const bookDetails = response.data.docs.map((book) => {
        const coverImage = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : "https://via.placeholder.com/100x150?text=No+Cover";
        return { ...book, coverImage };
      });
      setBooks(bookDetails);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search for books"
          value={query}
          onChangeText={(text) => setQuery(text)}
          onIconPress={searchBooks}
          onSubmitEditing={searchBooks}
          style={styles.searchbar}
        />

        {loading ? (
          <ActivityIndicator animating={true} style={styles.loadingIndicator} />
        ) : (
          <ScrollView>
            {books.map((book) => (
              <Card key={book.key} style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <Image
                    source={{ uri: book.coverImage }}
                    style={styles.image}
                  />
                  <View style={styles.textContainer}>
                    <Title style={styles.title}>{book.title}</Title>
                    <Paragraph style={styles.author}>
                      by{" "}
                      {book.author_name
                        ? book.author_name.join(", ")
                        : "Unknown"}
                    </Paragraph>
                    <Paragraph style={styles.description}>
                      {book.first_publish_year
                        ? `First published in ${book.first_publish_year}`
                        : "Publication date unknown"}
                    </Paragraph>
                  </View>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        )}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  searchbar: {
    marginBottom: 60,
    marginTop: 80,
  },
  loadingIndicator: {
    marginTop: 20,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardContent: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  image: {
    width: 100,
    height: 150,
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  author: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    marginBottom: 10,
  },
});

export default DetalisScreen;
