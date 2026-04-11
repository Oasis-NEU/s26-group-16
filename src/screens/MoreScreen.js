// More Screen — app info, menu options, and footer

import { View, Text, ScrollView, StyleSheet } from 'react-native'
import AppInfoCard from '../components/AppInfoCard'
import MenuList from '../components/MenuList'
import MoreFooter from '../components/MoreFooter'
import { colors, typography, spacing } from '../style/theme'

export default function MoreScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Screen title */}
            <Text style={styles.title}>More Options</Text>
            <Text style={styles.subtitle}>Make it yours!</Text>

            {/* App branding card */}
            <AppInfoCard />

            {/* Menu rows — settings, notifications, etc */}
            <MenuList />

            {/* Footer with copyright */}
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