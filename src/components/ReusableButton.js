import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ReusableButton = ({ title, onClick }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#841584",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ReusableButton;