// More Screen — app info, menu options, and footer
// Notifications temporarily disabled — needs development build
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native'
import { useEffect } from 'react'
// import * as Notifications from 'expo-notifications'
import AppInfoCard from '../components/AppInfoCard'
import MenuList from '../components/MenuList'
import MoreFooter from '../components/MoreFooter'
import { colors, typography, spacing } from '../style/theme'

// Notifications handler disabled for now
// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: true,
//         shouldSetBadge: false,
//     }),
// })

export default function MoreScreen() {
    // Notification permission disabled for now
    // useEffect(() => {
    //     Notifications.requestPermissionsAsync()
    // }, [])

    // Placeholder until notifications are re-enabled
    const handleTestNotification = async () => {
        Alert.alert('Coming Soon', 'Notifications require a development build to work.')
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>More Options</Text>
            <Text style={styles.subtitle}>Make it yours!</Text>
            <AppInfoCard />
            <MenuList onNotificationPress={handleTestNotification} />
            <MoreFooter />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundTint,
        padding: spacing.md,
    },
    title: {
        ...typography.sectionTitle,
        marginBottom: spacing.xs,
        marginTop: spacing.sm,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '700',
        color: colors.textMuted,
        marginBottom: spacing.md,
    },
})