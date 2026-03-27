import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function AppInfoCard() {
    return (
        <View style={styles.shadowWrapper}>
            <LinearGradient
                colors={['#ef4444', '#dc2626']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.card}
            >
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>🏋️</Text>
                </View>
                <View>
                    <Text style={styles.appName}>Gym Tracker Pro</Text>
                    <Text style={styles.appVersion}>Version 1.0.0</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    iconWrapper: {
        width: 64,
        height: 64,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        borderWidth: 4,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 30,
    },
    appName: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
    },
    appVersion: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700',
        opacity: 0.9,
    },
})