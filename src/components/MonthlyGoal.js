import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function MonthlyGoal({ goal, progress }) {
    return (
        <View style={styles.shadowWrapper}>
            <LinearGradient
                colors={['#000000', '#111827']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.card}
            >
                <Text style={styles.heading}>🎯  Monthly Goal</Text>
                <Text style={styles.description}>Complete {goal} workouts this month</Text>

                <View style={styles.progressBackground}>
                    <View style={styles.progressFill} />
                </View>
                <Text style={styles.progressText}>{progress}/{goal} workouts completed</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    shadowWrapper: {
        backgroundColor: '#000000',
        borderRadius: 24,
        marginVertical: 8,
        transform: [{ translateX: 4 }, { translateY: 4 }],
    },
    card: {
        borderRadius: 24,
        padding: 20,
        borderWidth: 4,
        borderColor: '#000000',
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    heading: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
        marginBottom: 8,
    },
    description: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 16,
    },
    progressBackground: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 999,
        height: 16,
        borderWidth: 2,
        borderColor: '#ffffff',
        overflow: 'hidden',
        marginBottom: 8,
    },
    progressFill: {
        backgroundColor: '#ffffff',
        height: '100%',
        width: '60%',
        borderRadius: 999,
    },
    progressText: {
        color: 'white',
        fontSize: 13,
        fontWeight: '700',
    },
})