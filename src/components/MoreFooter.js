import { View, Text, StyleSheet } from 'react-native'

export default function MoreFooter() {
    return (
        <View style={styles.shadowWrapper}>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Made with care for fitness enthusiasts</Text>
                <Text style={styles.footerSubText}>© 2026 Gym Tracker. All rights reserved.</Text>
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
    footer: {
        backgroundColor: '#ffffff',
        borderRadius: 24,
        borderWidth: 4,
        borderColor: '#000000',
        padding: 20,
        alignItems: 'center',
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    footerText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#6b7280',
        marginBottom: 4,
        textAlign: 'center',
    },
    footerSubText: {
        fontSize: 11,
        fontWeight: '700',
        color: '#9ca3af',
        textAlign: 'center',
    },
})