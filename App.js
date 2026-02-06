import { useState } from "react";
import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import InputItem from "./components/inputItem";
import GoalItem from "./components/goalItem";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [isShown, setShowness] = useState(false);

  const postGoals = (goal) => {
    const cleaned = goal.trim();
    if (!cleaned) return;

    setGoalsList((current) => [
      ...current,
      { text: cleaned, id: Math.random().toString() },
    ]);
    setShowness(false);
  };

  const showInput = () => setShowness(true);
  const hideInput = () => setShowness(false);

  const deleteGoal = (id) => {
    setGoalsList((current) => current.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={showInput}
          android_ripple={{ color: "#5b21b6" }}
          style={({ pressed }) => [
            styles.addBtn,
            pressed && styles.addBtnPressed,
          ]}
        >
          <Text style={styles.addBtnText}>Add New Goal</Text>
        </Pressable>
      </View>

      <InputItem postGoals={postGoals} close={hideInput} visible={isShown} />

      <View style={styles.listWrap}>
        <FlatList
          data={goalsList}
          renderItem={({ item }) => (
            <GoalItem text={item.text} onDelete={() => deleteGoal(item.id)} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    paddingHorizontal: 16,
    backgroundColor: "#f3f0ff", // light purple background
  },

  header: {
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden", // needed for ripple to stay rounded
  },

  addBtn: {
    backgroundColor: "#10501e",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  addBtnPressed: {
    backgroundColor: "#10501ec9",
    opacity: 0.95,
  },

  addBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  listWrap: {
    flex: 1,
    marginTop: 8,
  },
});
