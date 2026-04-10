import { View, ScrollView, StyleSheet, Text } from 'react-native'
import HeroCard from '../components/HeroCard'
import StatCard from '../components/StatCard'
import BadgeCard from '../components/BadgeCard'
import DailyChallenge from '../components/DailyChallenge'

let dayStreak = 69;
let workouts = 420;
let xpPoints = 888;
let achievements = 0;

let challenge = "Complete 30 push-ups today!";
let current = 69;
let total = 30;

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Greetings */}
            <HeroCard />

            {/* Mini-stats */}
            <View style={styles.grid}>
                <View style={styles.row}>
                    <StatCard icon="🔥" value={dayStreak} desc="Day Streak" backgroundColor="#F5A623" textColor="#ffffff" />
                    <StatCard icon="🏆" value={workouts} desc="Workouts" backgroundColor="#D00000" textColor="#ffffff" />
                </View>
                <View style={styles.row}>
                    <StatCard icon="⭐" value={xpPoints} desc="XP Points" backgroundColor="#ffffff" textColor="#000000" />
                    <StatCard icon="⚡" value={achievements} desc="Achievements" backgroundColor="#000000" textColor="#ffffff" />
                </View>
            </View>

            {/* Badges */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionIcon}>🏆</Text>
                <Text style={styles.sectionTitle}>Top Badges</Text>
            </View>

            <View style={styles.badgeRow}>
                <BadgeCard icon="🏆" name="Champion" />
                <BadgeCard icon="🔥" name="7 Day Streak" />
                <BadgeCard icon="⚡" name="Strong Start" />
            </View>

            {/* Daily Challenge */}
            <DailyChallenge
                challenge={challenge}
                current={current}
                total={total}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff5f5',
    },

    grid: {
        marginHorizontal: 10,
    },

    row: {
        flexDirection: 'row',
    },

    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 5,
    },

    sectionIcon: {
        fontSize: 24,
    },

    sectionTitle: {
        fontSize: 24,
        fontWeight: '900',
    },

    badgeRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 5,
    }
})