// ResultsOverlay — full screen overlay shown after session ends
// Displays total sets, reps, time, and current streak
//
// TODO (Backend): Pull current streak from Supabase
// TODO: Pass real elapsed time from SessionTimer up through WorkoutsScreen
// TODO (Backend): Save session results to Supabase on mount (useEffect)

import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { colors, borders, spacing, typography } from '../style/theme'

// Screen dimensions — used to make overlay fill the whole screen
const { width, height } = Dimensions.get('window')

export default function ResultsOverlay({ completedCount, totalExercises, exercises, completedIds, onDismiss, allCompleted }) {

    // Calculate total reps from completed exercises only
    // TODO (Backend): Replace with real logged reps from Supabase
    const totalReps = exercises
        .filter(e => completedIds.includes(e.id))
        .reduce((sum, e) => sum + (e.reps * e.sets), 0)

    // Calculate total sets from completed exercises only
    const totalSets = exercises
        .filter(e => completedIds.includes(e.id))
        .reduce((sum, e) => sum + e.sets, 0)

    // TODO: Replace with real elapsed time passed from SessionTimer
    const sessionTime = '00:00'

    // TODO (Backend): Replace with real streak from Supabase
    const currentStreak = 8

    return (
        // Absolutely positioned overlay covers the whole screen
        <View style={styles.overlay}>
            <LinearGradient
                colors={['#ef4444', colors.primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradient}
            >
                {/* Decorative dots — purely visual */}
                <View style={[styles.dot, styles.dotTopLeft]} />
                <View style={[styles.dot, styles.dotTopRight]} />
                <View style={[styles.dot, styles.dotBottomLeft]} />
                <View style={[styles.dot, styles.dotBottomRight]} />

                {/* Trophy icon circle */}
                <View style={styles.trophyWrapper}>
                    <View style={styles.trophyCircle}>
                        <Ionicons name="trophy" size={60} color={colors.textLight} />
                    </View>
                </View>

                {/* Main title */}
                <Text style={styles.title}>AMAZING{'\n'}WORK!</Text>
                <Text style={styles.subtitle}>You're a FITNESS BEAST!</Text>

                {/* Stats row — sets and reps side by side */}
                <View style={styles.statsCard}>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Total Sets</Text>
                        <Text style={styles.statValue}>{totalSets}</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Total Reps</Text>
                        <Text style={styles.statValue}>{totalReps}</Text>
                    </View>
                </View>

                {/* Session time card — black */}
                <View style={styles.timeCard}>
                    <Ionicons name="timer-outline" size={22} color={colors.streakCard} />
                    <View>
                        <Text style={styles.timeLabel}>Session Time</Text>
                        {/* TODO: Replace with real elapsed time */}
                        <Text style={styles.timeValue}>{sessionTime}</Text>
                    </View>
                </View>

                {/* Streak card — gold */}
                <View style={styles.streakCard}>
                    <Ionicons name="flame" size={22} color={colors.textDark} />
                    <View>
                        <Text style={styles.streakLabel}>Current Streak</Text>
                        {/* TODO (Backend): Replace with real streak from Supabase */}
                        <Text style={styles.streakValue}>{currentStreak} Days 🔥</Text>
                    </View>
                </View>

                {/* Dismiss button */}
                <View style={styles.dismissShadow}>
                    <TouchableOpacity style={styles.dismissButton} onPress={onDismiss}>
                        <Text style={styles.dismissText}>
                            {/* If all done, show AWESOME, otherwise let them continue */}
                            {allCompleted ? 'AWESOME! 🎉' : 'Continue Session'}
                        </Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    // Covers the entire screen on top of everything
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        zIndex: 999,
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.lg,
    },
    // Decorative floating dots
    dot: {
        position: 'absolute',
        borderRadius: 999,
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.4)',
    },
    dotTopLeft:     { width: 40, height: 40, top: 60,  left: 20,  backgroundColor: colors.streakCard },
    dotTopRight:    { width: 28, height: 28, top: 90,  right: 50, backgroundColor: 'rgba(255,255,255,0.3)' },
    dotBottomLeft:  { width: 50, height: 50, bottom: 80, left: 30, backgroundColor: colors.streakCard },
    dotBottomRight: { width: 35, height: 35, bottom: 60, right: 20, backgroundColor: 'rgba(255,255,255,0.3)' },

    // Trophy circle
    trophyWrapper: {
        marginBottom: spacing.lg,
    },
    trophyCircle: {
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: colors.streakCard,
        borderWidth: 4,
        borderColor: colors.border,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: '900',
        color: colors.textLight,
        textAlign: 'center',
        lineHeight: 52,
        marginBottom: spacing.sm,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '900',
        color: colors.streakCard,
        marginBottom: spacing.lg,
    },
    // White card with sets + reps
    statsCard: {
        backgroundColor: colors.background,
        borderRadius: borders.standard.borderRadius,
        borderWidth: borders.standard.borderWidth,
        borderColor: colors.border,
        padding: spacing.lg,
        flexDirection: 'row',
        width: '100%',
        marginBottom: spacing.sm,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statDivider: {
        width: 2,
        backgroundColor: colors.inputBackground,
        marginVertical: spacing.xs,
    },
    statLabel: {
        ...typography.small,
        color: colors.textMuted,
        marginBottom: spacing.xs,
    },
    statValue: {
        fontSize: 32,
        fontWeight: '900',
        color: colors.primary,
    },
    // Black session time card
    timeCard: {
        backgroundColor: colors.achievementCard,
        borderRadius: borders.standard.borderRadius,
        borderWidth: borders.standard.borderWidth,
        borderColor: colors.border,
        padding: spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        width: '100%',
        marginBottom: spacing.sm,
    },
    timeLabel: {
        ...typography.small,
        color: colors.textMuted,
    },
    timeValue: {
        fontSize: 24,
        fontWeight: '900',
        color: colors.textLight,
    },
    // Gold streak card
    streakCard: {
        backgroundColor: colors.streakCard,
        borderRadius: borders.standard.borderRadius,
        borderWidth: borders.standard.borderWidth,
        borderColor: colors.border,
        padding: spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        width: '100%',
        marginBottom: spacing.lg,
    },
    streakLabel: {
        ...typography.small,
        color: colors.textDark,
        opacity: 0.8,
    },
    streakValue: {
        fontSize: 24,
        fontWeight: '900',
        color: colors.textDark,
    },
    // Dismiss / continue button
    dismissShadow: {
        backgroundColor: colors.border,
        borderRadius: borders.standard.borderRadius,
        width: '100%',
        transform: [{ translateX: 4 }, { translateY: 4 }],
    },
    dismissButton: {
        backgroundColor: colors.background,
        borderRadius: borders.standard.borderRadius,
        borderWidth: borders.standard.borderWidth,
        borderColor: colors.border,
        paddingVertical: spacing.md,
        alignItems: 'center',
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    dismissText: {
        fontSize: 20,
        fontWeight: '900',
        color: colors.textDark,
    },
})