import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const badges = [
    { emoji: '🏆', name: 'Champion', gradientColors: ['#f87171', '#ef4444'] },
    { emoji: '⚡', name: '7 Day Streak', gradientColors: ['#ef4444', '#dc2626'] },
    { emoji: '📈', name: 'Strong Start', gradientColors: ['#374151', '#1f2937'] },
    { emoji: '❤️', name: 'Speed Demon', gradientColors: ['#000000', '#111827'] },
]

function BadgeCard({ emoji, name, gradientColors }) {
    return (
        <View style={styles.shadowWrapper}>
            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.card}
            >
                <Text style={styles.emoji}>{emoji}</Text>
                <Text style={styles.name}>{name}</Text>
            </LinearGradient>
        </View>
    )
}

export default function BadgesSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>🏅  Your Badges</Text>
            <View style={styles.grid}>
                {badges.map((badge, i) => (
                    <BadgeCard key={i} {...badge} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '900',
        color: '#000000',
        marginBottom: 12,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    shadowWrapper: {
        width: '47%',
        backgroundColor: '#000000',
        borderRadius: 16,
        transform: [{ translateX: 3 }, { translateY: 3 }],
    },
    card: {
        borderRadius: 16,
        borderWidth: 4,
        borderColor: '#000000',
        padding: 16,
        alignItems: 'center',
        transform: [{ translateX: -3 }, { translateY: -3 }],
    },
    emoji: {
        fontSize: 36,
        marginBottom: 8,
    },
    name: {
        color: 'white',
        fontSize: 13,
        fontWeight: '900',
        textAlign: 'center',
    },
})