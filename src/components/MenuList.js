import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const menuItems = [
    { emoji: '⚙️', label: 'Settings', gradientColors: ['#4b5563', '#374151'] },
    { emoji: '🔔', label: 'Notifications', gradientColors: ['#f87171', '#ef4444'] },
    { emoji: '❓', label: 'Help & Support', gradientColors: ['#374151', '#1f2937'] },
    { emoji: '📤', label: 'Share App', gradientColors: ['#ef4444', '#dc2626'] },
    { emoji: '⭐', label: 'Rate Us', gradientColors: ['#000000', '#111827'] },
    { emoji: 'ℹ️', label: 'About', gradientColors: ['#dc2626', '#b91c1c'] },
]

function MenuItem({ emoji, label, gradientColors }) {
    return (
        <View style={styles.shadowWrapper}>
            <TouchableOpacity activeOpacity={0.9}>
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.item}
                >
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.emoji}>{emoji}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default function MenuList() {
    return (
        <View style={styles.container}>
            {menuItems.map((item, i) => (
                <MenuItem key={i} {...item} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginVertical: 8,
    },
    shadowWrapper: {
        backgroundColor: '#000000',
        borderRadius: 16,
        transform: [{ translateX: 4 }, { translateY: 4 }],
    },
    item: {
        borderRadius: 16,
        borderWidth: 4,
        borderColor: '#000000',
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    label: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700',
    },
    emoji: {
        fontSize: 22,
    },
})