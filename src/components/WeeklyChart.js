import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


let maxValue = 0;
const CHART_HEIGHT = 160

function Bar({ day, value }) {

    if (value === 0) return (
        <View style={styles.barColumn}>
            <Text style={styles.dayLabel}>{day}</Text>
        </View>
    )
    const barHeight = (value / maxValue) * CHART_HEIGHT

    return (
        <View style={styles.barColumn}>
            <View style={[styles.barBackground, { height: CHART_HEIGHT }]}>
                <View style={styles.barShadow}>
                    <LinearGradient
                        colors={['#f87171', '#ef4444']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={[styles.bar, { height: barHeight }]}
                    />
                </View>
            </View>
            <Text style={styles.dayLabel}>{day}</Text>
        </View>
    )
}

export default function WeeklyChart({ weeklyData }) {
    maxValue = Math.max(...weeklyData.map(d => d.value))
    return (
        <View style={styles.shadowWrapper}>
            <View style={styles.card}>
                <Text style={styles.title}>Activity This Week</Text>
                <View style={styles.chart}>
                    {weeklyData.map(item => (
                        <Bar key={item.day} {...item} />
                    ))}
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
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    title: {
        fontSize: 18,
        fontWeight: '900',
        color: '#000000',
        marginBottom: 16,
    },
    chart: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 6,
    },
    barColumn: {
        flex: 1,
        alignItems: 'center',
        gap: 6,
    },
    barBackground: {
        width: '100%',
        justifyContent: 'flex-end',
    },
    barShadow: {
        backgroundColor: '#000000',
        borderRadius: 8,
        transform: [{ translateX: 2 }, { translateY: 2 }],
    },
    bar: {
        borderRadius: 8,
        borderWidth: 3,
        borderColor: '#000000',
        transform: [{ translateX: -2 }, { translateY: -2 }],
    },
    dayLabel: {
        fontSize: 11,
        fontWeight: '700',
        color: '#000000',
    },
})