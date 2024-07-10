import {
  ActivityIndicator,
  Button,
  Card,
  Modal,
  Paragraph,
  Portal,
  Provider,
  Text,
  Title,
} from "react-native-paper";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import axios from "axios";

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://openlibrary.org/subjects/science_fiction.json?limit=10"
      );
      const bookDetails = await Promise.all(
        response.data.works.map(async (book) => {
          const bookDetailResponse = await axios.get(
            `https://openlibrary.org${book.key}.json`
          );
          const coverImage = `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`;
          return { ...bookDetailResponse.data, coverImage };
        })
      );
      setBooks(bookDetails);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const showModal = (book) => {
    setSelectedBook(book);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
    setSelectedBook(null);
  };

  console.log("book", books);
  return (
    <Provider>
      <ScrollView style={styles.container}>
        {loading ? (
          <ActivityIndicator animating={true} />
        ) : (
          books.map((book) => (
            <Card key={book.key} style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Image source={{ uri: book.coverImage }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Title style={styles.title}>{book.title}</Title>
                  <Paragraph style={styles.author}>
                    Subject Times :

                    {book?.subject_times}
                  </Paragraph>
                  <Button
                    mode="contained"
                    onPress={() => showModal(book)}
                    style={styles.button}>
                    More Details
                  </Button>
                </View>
              </Card.Content>
            </Card>
          ))
        )}
      </ScrollView>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}>
          {selectedBook && (
            <View>
              <Title style={styles.modalTitle}>{selectedBook.title}</Title>
              <Paragraph style={styles.modalAuthor}>
                by{" "}
                {selectedBook.authors
                  ? selectedBook.authors.map((author) => author.name).join(", ")
                  : "Unknown"}
              </Paragraph>
              <Paragraph style={styles.modalDescription}>
                {selectedBook.description
                  ? selectedBook.description.value || selectedBook.description
                  : "No description available."}
              </Paragraph>
              <Paragraph style={styles.modalMoreDetails}>
                First published in {selectedBook.first_publish_date}
              </Paragraph>
              <Button
                mode="contained"
                onPress={hideModal}
                style={styles.modalButton}>
                Close
              </Button>
            </View>
          )}
        </Modal>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
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
    // fontStyle: "italic",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    alignSelf: "flex-start",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalAuthor: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 5,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalMoreDetails: {
    fontSize: 14,
    marginBottom: 20,
  },
  modalButton: {
    alignSelf: "center",
  },
});

export default HomeScreen;
