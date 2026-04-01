import { View, Text, StyleSheet } from 'react-native'

function StatBox({ emoji, value, label }) {
    return (
        <View style={styles.shadowWrapper}>
            <View style={styles.box}>
                <Text style={styles.emoji}>{emoji}</Text>
                <Text style={styles.value}>{value}</Text>
                <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    )
}

export default function StatsGrid({ workouts, daysActive, totalXP }) {
    return (
        <View style={styles.grid}>
            <StatBox emoji="📈" value={workouts} label="Workouts" />
            <StatBox emoji="❤️" value={daysActive} label="Days Active" />
            <StatBox emoji="⚡" value={totalXP} label="Total XP" />
        </View>
    )
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 8,
    },
    shadowWrapper: {
        flex: 1,
        backgroundColor: '#000000',
        borderRadius: 16,
        transform: [{ translateX: 3 }, { translateY: 3 }],
    },
    box: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        borderWidth: 4,
        borderColor: '#000000',
        padding: 12,
        alignItems: 'center',
        transform: [{ translateX: -3 }, { translateY: -3 }],
    },
    emoji: {
        fontSize: 24,
        marginBottom: 4,
    },
    value: {
        fontSize: 20,
        fontWeight: '900',
        color: '#000000',
    },
    label: {
        fontSize: 11,
        fontWeight: '700',
        color: '#00000099',
    },
})