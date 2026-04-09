import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

function StatItem({ value, label }) {
    return (
        <View>
            <Text style={styles.statValue}>{value}</Text>
            <Text style={styles.statLabel}>{label}</Text>
        </View>
    )
}

export default function WeekSummary({ workouts, activeTime, calories }) {
    return (
        <View style={styles.shadowWrapper}>
            <LinearGradient
                colors={['#ef4444', '#dc2626']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.card}
            >
                <Text style={styles.heading}>📅  This Week</Text>
                <View style={styles.statsRow}>
                    <StatItem value={workouts} label="Workouts" />
                    <StatItem value={`${activeTime}h`} label="Active Time" />
                    <StatItem value={calories} label="Calories" />
                </View>
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
        marginBottom: 16,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statValue: {
        color: 'white',
        fontSize: 30,
        fontWeight: '900',
    },
    statLabel: {
        color: 'white',
        fontSize: 13,
        fontWeight: '700',
        opacity: 0.9,
    },
})