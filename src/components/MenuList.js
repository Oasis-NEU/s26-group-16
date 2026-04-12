// MenuList — list of tappable menu rows with icons
// Each item has a label, Ionicon, and gradient colors
// Notifications row is gold — this is where the notification feature will live

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { colors, borders, spacing, typography } from '../style/theme'

// Menu item definitions
// gradientColors[0] = left, gradientColors[1] = right
const menuItems = [
    {
        label: 'Settings',
        icon: 'settings-outline',
        gradientColors: ['#4b5563', '#374151'],
    },
    {
        label: 'Notifications',
        icon: 'notifications-outline',
        // Gold/orange gradient — this is where notification feature will live
        // TODO: Wire onPress to navigate to notification settings
        gradientColors: ['#F5A623', '#F97316'],
    },
    {
        label: 'Help & Support',
        icon: 'help-circle-outline',
        gradientColors: ['#374151', '#1f2937'],
    },
    {
        label: 'Share App',
        icon: 'share-social-outline',
        gradientColors: [colors.achievementCard, '#111827'],
    },
    {
        label: 'Rate Us',
        icon: 'star-outline',
        gradientColors: ['#F5A623', '#F97316'],
    },
    {
        label: 'About',
        icon: 'information-circle-outline',
        gradientColors: [colors.primary, '#b91c1c'],
    },
]

// Individual menu row
// onPress is a placeholder for now — will be wired up per feature later
function MenuItem({ label, icon, gradientColors }) {
    return (
        <View style={styles.shadowWrapper}>
            <TouchableOpacity activeOpacity={0.85}>
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }} // left to right gradient
                    style={styles.item}
                >
                    {/* Label on the left */}
                    <Text style={styles.label}>{label}</Text>

                    {/* Icon on the right */}
                    <Ionicons name={icon} size={22} color={colors.textLight} />
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default function MenuList() {
    return (
        <View style={styles.container}>
            {/* Render a row for each menu item */}
            {menuItems.map((item, i) => (
                <MenuItem key={i} {...item} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: spacing.sm,
        marginVertical: spacing.sm,
    },
    shadowWrapper: {
        backgroundColor: colors.border,
        borderRadius: borders.small.borderRadius,
        transform: [{ translateX: 4 }, { translateY: 4 }],
    },
    item: {
        borderRadius: borders.small.borderRadius,
        borderWidth: borders.standard.borderWidth,
        borderColor: colors.border,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        transform: [{ translateX: -4 }, { translateY: -4 }],
    },
    label: {
        ...typography.body,
        color: colors.textLight,
        fontSize: 17,
    },
})