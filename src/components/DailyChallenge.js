// Component for the daily challenges in Home Screen
// A component is a reusable element that can be displayed on any screen
// We make one by creating view(s) for it and display them via calling their functions

import { View, Text, StyleSheet } from 'react-native'

export default function DailyChallenge({ challenge, current, total }) {
    return (
        <View style={styles.card}>
            {/* Title Row */}
            <View style={styles.titleRow}>
                <View style={styles.iconCircle}>
                    <Text style={styles.icon}>⭐</Text>
                </View>
                <Text style={styles.title}>Daily Challenge</Text>
            </View>

            {/* Description */}
            <Text style={styles.description}>{challenge}</Text>

            {/* Progress Bar */}
            <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${(current / total) * 100}%` }]} />
            </View>

            {/* Progress Text */}
            <Text style={styles.progressText}>{current}/{total} complete</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f71717',
        borderRadius: 24,
        padding: 24,
        margin: 15,
        borderWidth: 4,
        borderColor: '#000000',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 6,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
    },
    iconCircle: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 20,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
    },
    description: {
        color: 'white',
        fontSize: 16,
        marginBottom: 15,
    },
    progressBar: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 10,
        height: 12,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#000',
        marginBottom: 8,
    },
    progressFill: {
        backgroundColor: 'white',
        height: '100%',
        borderRadius: 10,
    },
    progressText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    }
})