// Badge Component for Home screen and stats screen
// A component is a reusable element that can be displayed on any screen
// We make one by creating view(s) for it and display them via calling their functions

import { View, Text, StyleSheet } from 'react-native'

export default function BadgeCard({ icon, name, color }) {
  return (
    <View style={styles.container}>
        {/* color of badge can change */}
        <View style={[styles.circle, { backgroundColor: color }]}>
            <Text style={styles.icon}>{icon}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        width: 100,
        alignItems: 'center',
        margin: 10,
    },

    // to make a circle make width = height & borderRadius (1/2) * width
    circle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#000000',
    },
    icon: {
        fontSize: 30,
    },
    name: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})