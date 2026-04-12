// Workouts Screen — manages the full workout session workflow
// States: idle → active → results → done
//
// HOW IT WORKS:
// 1. User presses START SESSION button → session goes active
// 2. User double taps a card to complete it → progress updates
// 3. User double taps again to undo → progress decrements
// 4. User presses End Session OR completes all exercises → results overlay
// 5. User dismisses results → done screen (if all done) or back to active
//
// HOW VALUES FLOW FROM CARDS TO RESULTS:
// Each ExerciseCard exposes getValues() via useImperativeHandle
// When session ends, WorkoutsScreen loops through cardRefs and calls getValues()
// Those values get passed to ResultsOverlay
//
// TODO (Backend): Replace todaySession with real Supabase data
// TODO (Backend): Track completed exercises in Supabase
// TODO (Backend): On session end, save results to Supabase

import { useState, useRef } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ExerciseCard from '../components/ExerciseCard'
import SessionTimer from '../components/SessionTimer'
import ResultsOverlay from '../components/ResultsOverlay'
import { colors, borders, spacing, typography } from '../style/theme'

// ─── Hardcoded session data ───────────────────────────────────────────────────
// TODO (Backend): Replace with Supabase query that fetches today's session
const todaySession = {
    name: 'Pull Day',
    exercises: [
        { id: 1, name: 'Pull-Ups',       weight: '0', reps: 8,  sets: 3 },
        { id: 2, name: 'Bent Over Rows', weight: '0', reps: 12, sets: 3 },
        { id: 3, name: 'Bicep Curls',    weight: '0', reps: 15, sets: 3 },
        { id: 4, name: 'Face Pulls',     weight: '0', reps: 12, sets: 3 },
    ]
}

// Card colors cycle: red → gold → white
const CARD_COLORS = [
    { bg: colors.primary,         text: colors.textLight },
    { bg: colors.streakCard,      text: colors.textDark  },
    { bg: colors.background,      text: colors.textDark  },
]

export default function WorkoutsScreen() {
    // ─── State ────────────────────────────────────────────────────────────────
    // sessionState controls which UI is shown
    // 'idle'    = before session starts, START SESSION button visible
    // 'active'  = session in progress, timer running, cards tappable
    // 'results' = results overlay shown
    // 'done'    = all exercises finished for the day
    const [sessionState, setSessionState] = useState('idle')

    // Set of completed exercise IDs
    // Using a Set makes add/remove easy
    // TODO (Backend): Sync with Supabase so progress persists
    const [completedIds, setCompletedIds] = useState(new Set())

    // Holds weight/reps/sets collected from cards when session ends
    const [sessionResults, setSessionResults] = useState([])

    // One ref per exercise card — used to call getValues() on each
    const cardRefs = useRef(
        todaySession.exercises.map(() => useRef(null))
    ).current

    // ─── Derived values ───────────────────────────────────────────────────────
    const totalExercises  = todaySession.exercises.length
    const completedCount  = completedIds.size
    const allCompleted    = completedCount === totalExercises
    const progressPercent = totalExercises > 0
        ? (completedCount / totalExercises) * 100
        : 0

    // ─── Handlers ─────────────────────────────────────────────────────────────

    // Start session button — switches from idle to active
    const handleStartSession = () => setSessionState('active')

    // Mark an exercise as complete
    const handleComplete = (id) => {
        setCompletedIds(prev => {
            const updated = new Set(prev)
            updated.add(id)
            // If all exercises done, go straight to results
            if (updated.size === totalExercises) {
                collectResultsAndShow()
            }
            return updated
        })
    }

    // Unmark an exercise — double tap again to undo
    const handleUncomplete = (id) => {
        setCompletedIds(prev => {
            const updated = new Set(prev)
            updated.delete(id)
            return updated
        })
    }

    // Collect current values from all cards then show results
    const collectResultsAndShow = () => {
        const results = cardRefs.map(ref => {
            if (ref.current) return ref.current.getValues()
            return null
        }).filter(Boolean)
        setSessionResults(results)
        setSessionState('results')
    }

    // End session button
    const handleEndSession = () => collectResultsAndShow()

    // Dismiss results overlay
    // All done → done screen
    // Not all done → back to active
    // TODO (Backend): Update Supabase with completed exercises on dismiss
    const handleDismissResults = () => {
        if (allCompleted) setSessionState('done')
        else setSessionState('active')
    }

    // ─── Render: Done screen ──────────────────────────────────────────────────
    if (sessionState === 'done') {
        return (
            <View style={styles.doneContainer}>
                <Ionicons name="checkmark-circle" size={80} color={colors.primary} />
                <Text style={styles.doneTitle}>All done for today!</Text>
                <Text style={styles.doneSubtitle}>
                    You crushed every exercise. Come back tomorrow! 🐄
                </Text>
            </View>
        )
    }

    // ─── Render: Main workout screen ──────────────────────────────────────────
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>

                {/* ── Header ── */}
                <View style={styles.header}>
                    <View style={styles.headerLabel}>
                        <Ionicons name="calendar-outline" size={16} color={colors.primary} />
                        <Text style={styles.headerLabelText}>TODAY'S SESSION</Text>
                    </View>
                    <Text style={styles.sessionName}>{todaySession.name}</Text>
                </View>

                {/* ── START SESSION button — only in idle state ── */}
                {sessionState === 'idle' && (
                    <View style={styles.startButtonShadow}>
                        <TouchableOpacity
                            style={styles.startButton}
                            onPress={handleStartSession}
                        >
                            <Text style={styles.startButtonText}>START</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* ── Session Timer — only visible when active ── */}
                {sessionState === 'active' && (
                    // TODO: Wire timer to count up with useEffect + setInterval
                    <SessionTimer />
                )}

                {/* ── Exercise list ── */}
                {todaySession.exercises.map((exercise, index) => (
                    <ExerciseCard
                        key={exercise.id}
                        ref={cardRefs[index]}
                        exercise={exercise}
                        cardColor={CARD_COLORS[index % CARD_COLORS.length]}
                        isCompleted={completedIds.has(exercise.id)}
                        sessionActive={sessionState === 'active'}
                        onComplete={() => handleComplete(exercise.id)}
                        onUncomplete={() => handleUncomplete(exercise.id)}
                    />
                ))}

                {/* ── Progress bar ── */}
                <View style={styles.progressSection}>
                    <Text style={styles.progressLabel}>Progress</Text>
                    <Text style={styles.progressCount}>{completedCount} / {totalExercises}</Text>
                </View>
                <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
                </View>

                {/* ── End Session button — only in active state ── */}
                {sessionState === 'active' && (
                    <View style={styles.endButtonShadow}>
                        <TouchableOpacity
                            style={styles.endButton}
                            onPress={handleEndSession}
                        >
                            <Text style={styles.endButtonText}>End Session</Text>
                        </TouchableOpacity>
                    </View>
                )}

            </ScrollView>

            {/* ── Results overlay — sits on top of everything ── */}
            {sessionState === 'results' && (
                <ResultsOverlay
                    sessionResults={sessionResults}
                    completedIds={completedIds}
                    onDismiss={handleDismissResults}
                    allCompleted={allCompleted}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundTint,
    },
    header: {
        paddingHorizontal: spacing.md,
        paddingTop: 60,
        paddingBottom: spacing.sm,
    },
    headerLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.xs,
        marginBottom: spacing.xs,
    },
    headerLabelText: {
        fontSize: 13,
        fontWeight: '900',
        color: colors.primary,
        letterSpacing: 1,
    },
    sessionName: {
        fontSize: 40,
        fontWeight: '900',
        color: colors.textDark,
        marginBottom: spacing.xs,
    },
    // Start session button — green to stand out from red theme
    startButtonShadow: {
        backgroundColor: colors.border,
        borderRadius: borders.standard.borderRadius,
        marginHorizontal: spacing.md,
        marginBottom: spacing.sm,
        transform: [{ translateX: 4 }, { translateY: 4 }],
    },
    startButton: {
        backgroundColor: colors.streakCard, // green — signals "go"
        borderRadius: borders.standard.borderRadius,
        borderWidth: borders.standard.borderWidth,
        borderColor: colors.border,
        paddingVertical: spacing.md,
        alignItems: 'center',
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    startButtonText: {
        ...typography.body,
        color: colors.textLight,
        fontSize: 28,
        fontWeight: '900',
    },
    progressSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.md,
        marginTop: spacing.md,
        marginBottom: spacing.xs,
    },
    progressLabel: {
        ...typography.small,
        color: colors.textMuted,
        fontSize: 14,
    },
    progressCount: {
        ...typography.small,
        color: colors.textMuted,
        fontSize: 14,
    },
    progressTrack: {
        marginHorizontal: spacing.md,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 999,
        height: 8,
        overflow: 'hidden',
        marginBottom: spacing.md,
    },
    progressFill: {
        backgroundColor: colors.primary,
        height: '100%',
        borderRadius: 999,
    },
    // End session button
    endButtonShadow: {
        backgroundColor: colors.border,
        borderRadius: borders.standard.borderRadius,
        marginHorizontal: spacing.md,
        marginBottom: spacing.xl,
        transform: [{ translateX: 4 }, { translateY: 4 }],
    },
    endButton: {
        backgroundColor: colors.primary,
        borderRadius: borders.standard.borderRadius,
        borderWidth: borders.standard.borderWidth,
        borderColor: colors.border,
        paddingVertical: spacing.md,
        alignItems: 'center',
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    endButtonText: {
        ...typography.body,
        color: colors.textLight,
        fontSize: 18,
    },
    // Done screen
    doneContainer: {
        flex: 1,
        backgroundColor: colors.backgroundTint,
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.xl,
    },
    doneTitle: {
        ...typography.sectionTitle,
        marginTop: spacing.lg,
        marginBottom: spacing.sm,
        textAlign: 'center',
    },
    doneSubtitle: {
        ...typography.body,
        color: colors.textMuted,
        textAlign: 'center',
    },
})