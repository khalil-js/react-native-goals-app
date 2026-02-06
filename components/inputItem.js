import {
  View,
  TextInput,
  Modal,
  StyleSheet,
  Image,
  Pressable,
  Text,
} from "react-native";
import { useState } from "react";

function InputItem(props) {
  const [goal, setGoal] = useState("");

  const addGoalHandler = () => {
    const cleaned = goal.trim();
    if (!cleaned) return;

    props.postGoals(cleaned);
    setGoal("");
    props.close();
  };

  const closeHandler = () => {
    setGoal("");
    props.close();
  };

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      onRequestClose={closeHandler}
    >
      <View style={styles.screen}>
        <Image
          source={require("../assets/imgs/goal.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.card}>
          <TextInput
            placeholder="Enter a goal..."
            placeholderTextColor="#ddd"
            style={styles.input}
            onChangeText={setGoal}
            value={goal}
          />

          <View style={styles.buttons}>
            {/* Cancel button */}
            <Pressable
              onPress={closeHandler}
              style={({ pressed }) => [
                styles.button,
                styles.cancelButton,
                pressed && styles.cancelPressed,
              ]}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>

            {/* Add button */}
            <Pressable
              onPress={addGoalHandler}
              style={({ pressed }) => [
                styles.button,
                styles.addButton,
                pressed && styles.addPressed,
              ]}
            >
              <Text style={styles.buttonText}>Add</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default InputItem;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f0ff",
  },

  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  card: {
    width: "100%",
    padding: 20,
    borderRadius: 14,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },

  input: {
    borderWidth: 1,
    borderColor: "#7c3aed",
    backgroundColor: "#46a052ce",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 16,
    color: "white",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginLeft: 10,
  },

  addButton: {
    backgroundColor: "#7c3aed",
  },

  addPressed: {
    backgroundColor: "#5b21b6",
  },

  cancelButton: {
    backgroundColor: "#ec3d3d",
  },

  cancelPressed: {
    backgroundColor: "#ec3d3d79",
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});
