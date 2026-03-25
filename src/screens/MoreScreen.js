import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import AppInfoCard from '../components/AppInfoCard'
import MenuList from '../components/MenuList'
import MoreFooter from '../components/MoreFooter'

export default function MoreScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>More Options</Text>
            <Text style={styles.subtitle}>Customize your experience</Text>

            <AppInfoCard />
            <MenuList />
            <MoreFooter />

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
})