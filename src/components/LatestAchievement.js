import { View, Text, StyleSheet } from 'react-native'

export default function LatestAchievement() {
    return (
        <View style={styles.shadowWrapper}>
            <View style={styles.card}>
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>🏆</Text>
                </View>
                <View style={styles.textBlock}>
                    <Text style={styles.heading}>Latest Achievement</Text>
                    <Text style={styles.name}>Week Warrior</Text>
                    <Text style={styles.description}>5 workouts in one week!</Text>
                </View>
            </View>
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
        backgroundColor: '#ffffff',
        borderRadius: 24,
        borderWidth: 4,
        borderColor: '#000000',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    iconWrapper: {
        backgroundColor: '#ef4444',
        borderRadius: 999,
        borderWidth: 4,
        borderColor: '#000000',
        width: 68,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 32,
    },
    textBlock: {
        flex: 1,
    },
    heading: {
        fontSize: 16,
        fontWeight: '900',
        color: '#000000',
    },
    name: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000000',
    },
    description: {
        fontSize: 13,
        fontWeight: '600',
        color: '#6b7280',
    },
})