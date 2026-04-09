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