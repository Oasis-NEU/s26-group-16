import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import ProfileHeader from '../components/ProfileHeader'
import StatsGrid from '../components/StatsGrid'
import BadgesSection from '../components/BadgesSection'
import PersonalInfo from '../components/PersonalInfo'

let level = 12;
let currentXP = 750;
let goalXP = 1000;

let workouts = 24;
let daysActive = 12; // in hours
let totalXP = 6700;

let personalInfo = [
    { key: 'Memeber Since:', value: "January 2023" },
    { key: 'Favorite Workout:', value: "Upperbody Blast" },
    { key: 'Weekly Goal:', value: "5 Workouts" },
]
export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            <ProfileHeader level={level} currentXP={currentXP} goalXP={goalXP} />
            <StatsGrid workouts={workouts} daysActive={daysActive} totalXP={totalXP} />
            <BadgesSection />
            <PersonalInfo data={personalInfo} />

            <TouchableOpacity style={styles.settingsButton}>
                <Text style={styles.settingsButtonText}>⚙️  Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    settingsButton: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#000000',
        paddingVertical: 16,
        paddingHorizontal: 24,
        marginVertical: 10,
        alignItems: 'center',
        shadowColor: '#000000',
        elevation: 6,
    },
    logoutButton: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#ef4444',
        paddingVertical: 16,
        alignItems: 'center',
        marginVertical: 10,
        elevation: 6,
    },
    logoutText: {
        color: '#ef4444',
        fontSize: 18,
        fontWeight: '900',
    },
    settingsButtonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '900',
    },
})