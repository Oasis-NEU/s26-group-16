import { View, Text, StyleSheet } from 'react-native'

function InfoRow({ label, value }) {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default function PersonalInfo() {
    return (
        <View style={styles.shadowWrapper}>
            <View style={styles.card}>
                <Text style={styles.title}>Personal Info</Text>
                <InfoRow label="Member Since" value="January 2026" />
                <InfoRow label="Favorite Workout" value="Upper Body Blast" />
                <InfoRow label="Weekly Goal" value="5 workouts" />
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
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    title: {
        fontSize: 18,
        fontWeight: '900',
        color: '#000000',
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#e5e7eb',
    },
    label: {
        fontSize: 14,
        fontWeight: '700',
        color: '#6b7280',
    },
    value: {
        fontSize: 14,
        fontWeight: '900',
        color: '#000000',
    },
})