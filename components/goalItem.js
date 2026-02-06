import { Pressable, Text, View, StyleSheet } from "react-native";

function GoalItem({ text, onDelete }) {
  return (
    <View style={styles.outer}>
      <Pressable
        onPress={onDelete}
        android_ripple={{ color: "#5b21b6" }} // darker purple ripple
        style={({ pressed }) => [
          styles.item,
          pressed && styles.pressed
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  outer: {
    marginVertical: 6,
    borderRadius: 12,
    overflow: "hidden",
  },

  item: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,

   
    backgroundColor: "#492588",

  
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  pressed: {
    backgroundColor: "#2f125c", 
    opacity: 0.9,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
