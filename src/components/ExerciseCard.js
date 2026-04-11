// ExerciseCard — single exercise card with swipe-to-complete gesture
//
// SWIPE LOGIC EXPLAINED:
// PanResponder listens to touch gestures on the card
// When user drags right far enough (SWIPE_THRESHOLD), onComplete() is called
// The card then shows a green "Done!" state
//
// TODO: Polish the swipe animation — currently it snaps, ideally it slides smoothly
// TODO (Backend): When swiped, send completion to Supabase

import { useRef, useState } from 'react'
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors, borders, spacing, typography } from '../style/theme'

// How far user needs to drag right to trigger completion (in pixels)
const SWIPE_THRESHOLD = 120

export default function ExerciseCard({ exercise, cardColor, isCompleted, swipeEnabled, onComplete }) {
    // translateX tracks how far the card has been dragged horizontally
    const translateX = useRef(new Animated.Value(0)).current

    // Whether this card has been locally swiped (for UI feedback)
    const [swiped, setSwiped] = useState(false)

    // ─── PanResponder setup ───────────────────────────────────────────────────
    // PanResponder is React Native's built-in gesture handler
    // It gives us dx (horizontal distance) and dy (vertical distance) of the drag
    const panResponder = useRef(
        PanResponder.create({
            // Only capture the gesture if swiping is enabled and card isn't done
            onMoveShouldSetPanResponder: (_, gestureState) => {
                return swipeEnabled && !isCompleted && Math.abs(gestureState.dx) > 10
            },

            // As user drags, move the card with their finger
            onPanResponderMove: (_, gestureState) => {
                // Only allow dragging to the right (dx > 0)
                if (gestureState.dx > 0) {
                    translateX.setValue(gestureState.dx)
                }
            },

            // When user lets go
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx >= SWIPE_THRESHOLD) {
                    // Swiped far enough — mark as complete
                    // Animate card sliding off to the right
                    Animated.timing(translateX, {
                        toValue: 500,
                        duration: 200,
                        useNativeDriver: true,
                    }).start(() => {
                        setSwiped(true)
                        onComplete()
                    })
                } else {
                    // Didn't swipe far enough — snap card back to original position
                    Animated.spring(translateX, {
                        toValue: 0,
                        useNativeDriver: true,
                    }).start()
                }
            },
        })
    ).current

    // ─── Completed state ──────────────────────────────────────────────────────
    if (isCompleted || swiped) {
        return (
            <View style={styles.completedWrapper}>
                <View style={styles.completedCard}>
                    <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
                    <Text style={styles.completedText}>{exercise.name} — Done!</Text>
                </View>
            </View>
        )
    }

    // ─── Normal card ──────────────────────────────────────────────────────────
    return (
        // Animated.View moves with the swipe gesture via translateX
        <Animated.View
            style={[styles.shadowWrapper, { transform: [{ translateX }] }]}
            {...(swipeEnabled ? panResponder.panHandlers : {})}
        >
            <View style={[styles.card, { backgroundColor: cardColor.bg }]}>
                {/* Exercise name */}
                <Text style={[styles.exerciseName, { color: cardColor.text }]}>
                    {exercise.name}
                </Text>

                {/* Three stat boxes: weight, reps, sets */}
                <View style={styles.statsRow}>
                    <StatBox label="WEIGHT" value={exercise.weight} cardColor={cardColor} />
                    <StatBox label="REP"    value={exercise.reps}   cardColor={cardColor} />
                    <StatBox label="SET"    value={exercise.sets}   cardColor={cardColor} />
                </View>
            </View>
        </Animated.View>
    )
}

// Small stat box inside each exercise card
function StatBox({ label, value, cardColor }) {
    // The stat box background is slightly darker/lighter than the card
    // We use rgba overlay to achieve this without hardcoding colors
    return (
        <View style={[styles.statBox, { backgroundColor: 'rgba(0,0,0,0.15)' }]}>
            <Text style={[styles.statLabel, { color: cardColor.text, opacity: 0.7 }]}>
                {label}
            </Text>
            <Text style={[styles.statValue, { color: cardColor.text }]}>
                {value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    shadowWrapper: {
        backgroundColor: colors.border,
        borderRadius: borders.standard.borderRadius,
        marginHorizontal: spacing.md,
        marginVertical: spacing.sm,
        transform: [{ translateX: 4 }, { translateY: 4 }],
    },
    card: {
        borderRadius: borders.standard.borderRadius,
        borderWidth: borders.standard.borderWidth,
        borderColor: colors.border,
        padding: spacing.lg,
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: '900',
        marginBottom: spacing.md,
    },
    statsRow: {
        flexDirection: 'row',
        gap: spacing.sm,
    },
    statBox: {
        flex: 1,
        borderRadius: borders.small.borderRadius,
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.2)',
        padding: spacing.sm,
    },
    statLabel: {
        fontSize: 10,
        fontWeight: '900',
        marginBottom: 2,
        letterSpacing: 0.5,
    },
    statValue: {
        fontSize: 20,
        fontWeight: '900',
    },
    // Completed state
    completedWrapper: {
        marginHorizontal: spacing.md,
        marginVertical: spacing.sm,
    },
    completedCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        backgroundColor: colors.inputBackground,
        borderRadius: borders.standard.borderRadius,
        borderWidth: borders.standard.borderWidth,
        borderColor: colors.border,
        padding: spacing.md,
        opacity: 0.6,
    },
    completedText: {
        ...typography.body,
        color: colors.textMuted,
    },
})