// SessionTimer — red card showing elapsed session time
//
// TODO: Implement the actual timer using useEffect + setInterval
// Right now it just displays a static "00:00"
// When you implement it:
// 1. Add a useState for seconds: const [seconds, setSeconds] = useState(0)
// 2. Add a useEffect that runs setInterval every 1000ms to increment seconds
// 3. Format seconds into MM:SS for display
// 4. Make sure to clearInterval when the component unmounts (return clearInterval in useEffect)
// 5. Pass the elapsed time up to WorkoutsScreen so ResultsOverlay can show it

import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors, borders, spacing, typography } from '../style/theme'

export default function SessionTimer() {
    // TODO: Replace '00:00' with live timer value
    const displayTime = '00:00'

    return (
        <View style={styles.shadowWrapper}>
            <View style={styles.card}>
                {/* Timer icon + label on the left */}
                <View style={styles.leftRow}>
                    <Ionicons name="timer-outline" size={22} color={colors.textLight} />
                    <Text style={styles.label}>Session Timer</Text>
                </View>

                {/* Time display on the right */}
                <Text style={styles.time}>{displayTime}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shadowWrapper: {
        backgroundColor: colors.border,
        borderRadius: borders.standard.borderRadius,
        marginHorizontal: spacing.md,
        marginBottom: spacing.sm,
        transform: [{ translateX: 4 }, { translateY: 4 }],
    },
    card: {
        backgroundColor: colors.primary,
        borderRadius: borders.standard.borderRadius,
        borderWidth: borders.standard.borderWidth,
        borderColor: colors.border,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    leftRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },
    label: {
        ...typography.body,
        color: colors.textLight,
        fontSize: 18,
    },
    // Big bold timer digits on the right
    time: {
        fontSize: 32,
        fontWeight: '900',
        color: colors.textLight,
        fontVariant: ['tabular-nums'], // keeps digits same width so timer doesn't jump
    },
})