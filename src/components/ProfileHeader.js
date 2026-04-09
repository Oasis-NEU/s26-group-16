import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function ProfileHeader({ level, currentXP, goalXP }) {
    return (
        <View style={styles.shadowWrapper}>
            <LinearGradient
                colors={['#ef4444', '#dc2626']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.card}
            >
                {/* Avatar + Name */}
                <View style={styles.topRow}>
                    <View style={styles.avatarWrapper}>
                        <Text style={styles.avatarEmoji}>👤</Text>
                    </View>
                    <View>
                        <Text style={styles.name}>Gym Hero</Text>
                        <Text style={styles.level}>Level {level} Champion</Text>
                    </View>
                </View>

                {/* XP Bar */}
                <View style={styles.xpBarBackground}>
                    <View style={styles.xpBarFill} />
                </View>
                <Text style={styles.xpText}>{currentXP}/{goalXP} XP to Level {level + 1}</Text>
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
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        marginBottom: 16,
    },
    avatarWrapper: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: '#ffffff',
        borderWidth: 4,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarEmoji: {
        fontSize: 36,
    },
    name: {
        color: 'white',
        fontSize: 22,
        fontWeight: '900',
    },
    level: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        opacity: 0.9,
    },
    xpBarBackground: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 999,
        height: 12,
        borderWidth: 2,
        borderColor: '#000000',
        overflow: 'hidden',
        marginBottom: 8,
    },
    xpBarFill: {
        backgroundColor: '#ffffff',
        height: '100%',
        width: '75%',
        borderRadius: 999,
    },
    xpText: {
        color: 'white',
        fontSize: 13,
        fontWeight: '700',
    },
})