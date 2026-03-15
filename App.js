import { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

// COMPONENT with PROPS
function WorkoutCard({ name, sets, reps, done, onPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.workoutName}>{name}</Text>
      <Text>{sets} sets x {reps} reps</Text>
      <Button 
        title={done ? "✅ Done!" : "Mark Complete"} 
        onPress={onPress} 
      />
    </View>
  )
}

// MAIN APP
export default function App() {
  // USESTATE
  const [benchDone, setBenchDone] = useState(false)
  const [squatDone, setSquatDone] = useState(false)
  const [deadliftDone, setDeadliftDone] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Workout</Text>

      <WorkoutCard 
        name="Bench Press" 
        sets={3} 
        reps={10} 
        done={benchDone}
        onPress={() => setBenchDone(!benchDone)}
      />
      <WorkoutCard 
        name="Squats" 
        sets={4} 
        reps={8} 
        done={squatDone}
        onPress={() => setSquatDone(!squatDone)}
      />
      <WorkoutCard 
        name="Deadlift" 
        sets={3} 
        reps={5} 
        done={deadliftDone}
        onPress={() => setDeadliftDone(!deadliftDone)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f6f6ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#4bd406ff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  }
})