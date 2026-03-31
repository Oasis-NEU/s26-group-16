import { View, Text, ScrollView, StyleSheet } from 'react-native'
import WeekSummary from '../components/WeekSummary'
import WeeklyChart from '../components/WeeklyChart'
import MonthlyGoal from '../components/MonthlyGoal'
import LatestAchievement from '../components/LatestAchievement'


let workouts = 5;
let activeTime = 3; // in hours
let calories = 6700;

const weeklyData = [
    { day: 'Mon', value: 0 },
    { day: 'Tue', value: 0 },
    { day: 'Wed', value: 40 },
    { day: 'Thu', value: 100 },
    { day: 'Fri', value: 40 },
    { day: 'Sat', value: 0 },
    { day: 'Sun', value: 0 },
]

let goal = 20;
let progress = 12;

export default function StatsScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Your Stats</Text>
            <Text style={styles.subtitle}>Track your amazing progress!</Text>
            <WeekSummary workouts={workouts} activeTime={activeTime} calories={calories} />
            <WeeklyChart weeklyData={weeklyData} />
            <MonthlyGoal goal={goal} progress={progress} />
            <LatestAchievement />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: '#000000',
        marginBottom: 4,
        marginTop: 8,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#6b7280',
        marginBottom: 16,
    },
})