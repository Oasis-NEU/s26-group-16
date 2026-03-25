import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import ProfileHeader from '../components/ProfileHeader'
import StatsGrid from '../components/StatsGrid'
import BadgesSection from '../components/BadgesSection'
import PersonalInfo from '../components/PersonalInfo'

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            <ProfileHeader />
            <StatsGrid />
            <BadgesSection />
            <PersonalInfo />

            <TouchableOpacity style={styles.settingsButton}>
                <Text style={styles.settingsButtonText}>⚙️  Edit Profile</Text>
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
    settingsButtonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '900',
    },
})