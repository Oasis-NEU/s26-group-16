// Empty Workouts screen

import { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import WorkoutCard from '../components/WorkoutCard'
import SearchBar from '../components/SearchBar'

export default function WorkoutScreen() {
    const [search, setSearch] = useState('')
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Workouts</Text>
            <Text style={styles.subtitle}>Choose your adventure</Text>
            <SearchBar value={search} onChangeText={setSearch} />

            <WorkoutCard name="Upper Body Blast" duration={25} calories={200} gradientColors={['#f87171', '#ef4444']} />
            <WorkoutCard name="Leg Day Power" duration={30} calories={250} gradientColors={['#ef4444', '#dc2626']} />
            <WorkoutCard name="Core Crusher" duration={15} calories={120} gradientColors={['#374151', '#1f2937']} />
            <WorkoutCard name="Full Body Flow" duration={40} calories={350} gradientColors={['#000000', '#111827']} />
            <WorkoutCard name="Cardio Burn" duration={20} calories={180} gradientColors={['#dc2626', '#b91c1c']} />

            <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>+ Create Custom Workout</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    createButton: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#000000',
        paddingVertical: 16,
        paddingHorizontal: 24,
        marginHorizontal: 15,
        marginVertical: 10,
        shadowColor: '#000000',
        elevation: 6,
        alignItems: 'center',
    },
    createButtonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '900',
    },
    container: {
        flex: 1,
        backgroundColor: '#fefefe'
    },
    text: {
        fontSize: 15,
        color: 'black'
    },
    title: {
        fontSize: 36,
        fontWeight: '900',
        color: '#000000',
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#555555',
        marginHorizontal: 15,
        marginBottom: 10,
    }
})